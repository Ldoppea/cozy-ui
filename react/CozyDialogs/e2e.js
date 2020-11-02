module.exports = async (page, screenshot) => {
  for (const dialogType of [
    'Dialog',
    'ConfirmDialog',
    'IllustrationDialog',
    'FixedDialog',
    'FixedActionsDialog'
  ]) {
    console.log(`Screenshotting dialog type ${dialogType}`)

    const openBtnSel = `[data-test-id=open-btn-${dialogType}]`
    const closeBtnSel = '[data-test-id*=modal-close-button]'
    await page.waitForSelector(openBtnSel)
    await page.click(openBtnSel)
    await page.waitForSelector(closeBtnSel)
    await screenshot(dialogType)
    await page.click(closeBtnSel)
    await page.waitForSelector(closeBtnSel, { hidden: true })
  }
}
