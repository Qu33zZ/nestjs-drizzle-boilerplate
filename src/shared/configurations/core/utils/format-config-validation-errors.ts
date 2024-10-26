import { ValidationError } from 'class-validator';

export const formatConfigValidationErrors = (
  errors: ValidationError[],
  configName?: string,
): string[] => {
  const groupedByTarget = new Map<string, string[]>();

  errors.forEach((error) => {
    const targetName = configName || 'UnknownConfig';
    const property = error.property;
    const constraints = error.constraints
      ? Object.values(error.constraints)
          .map((msg) => `  - ${msg}`)
          .join('\n')
      : '';

    const errorMessage = `  * ${property}:\n${constraints}`;

    if (groupedByTarget.has(targetName)) {
      groupedByTarget.get(targetName)!.push(errorMessage);
    } else {
      groupedByTarget.set(targetName, [errorMessage]);
    }
  });

  // Format grouped errors for output
  const formattedErrors: string[] = [];
  groupedByTarget.forEach((errors, target) => {
    formattedErrors.push(`[${target}]\n${errors.join('\n')}`);
  });

  return formattedErrors;
};
