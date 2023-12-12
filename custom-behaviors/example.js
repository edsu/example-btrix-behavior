class ExampleBehavior {
  static id = 'ExampleBehavior';

  static init() {
    console.log('Initializing Test behavior');
    return {
      example: 1
    };
  }

  static isMatch() {
    return true;
  }

  async* run(ctx) {
    const { getState } = ctx.Lib;
    yield getState(ctx, "Running example behavior", "example");
  }
}
