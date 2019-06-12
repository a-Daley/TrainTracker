describe('use form to submit information and send text', () => {
  
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('have an input field for user name', async () => {
    await expect(element(by.id('nameValue'))).toBeVisible();
  })

  it('have an input field for user number', async () => {
    await expect(element(by.id('numberValue'))).toBeVisible();
  });

  it('have an input field for train', async () => {
    await expect(element(by.id('trainValue'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});