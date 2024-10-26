import { validateSync } from 'class-validator';
import { formatConfigValidationErrors } from '../utils';

export function Config() {
  return function <T extends { new (...args: any[]): object }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);

        const errors = validateSync(this, {
          skipMissingProperties: false,
        });

        if (errors.length) {
          const groupedErrors = formatConfigValidationErrors(
            errors,
            constructor.name,
          );
          throw new Error(
            `Configuration validation errors:\n${groupedErrors.join('\n\n')}`,
          );
        }
      }
    };
  };
}
