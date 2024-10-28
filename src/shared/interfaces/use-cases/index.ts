export interface IBaseUseCase<Command, Result> {
  execute(command?: Command): Promise<Result>;
}
