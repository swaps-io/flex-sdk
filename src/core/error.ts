/**
 * Represents error that occurred during SDK operation.
 *
 * @category Core
 */
export class FlexError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'FlexError';
  }
}
