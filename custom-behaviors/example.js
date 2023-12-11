export class DocumentLinksBehavior {
  static id = 'TestBehavior';

  static init() {
    console.log('Initializing Test behavior');
    return {};
  }

  static isMatch() {
    return true;
  }

  async* run(ctx) {
    yield 'Running!';
    yield 'Test Behavior complete.';
  }
}
