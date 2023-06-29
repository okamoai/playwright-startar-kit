import { test, expect } from '@playwright/test'

import Google from '@/mobile/helpers/google'

test.describe('Sample1', () => {
  test('Case1 (success)', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('textbox').click()
    await page.getByRole('textbox').fill('Sample1 Case1')
    await page.getByRole('textbox').press('Enter')

    await expect(page).toHaveTitle(/Sample1 Case1/)
  })

  test('Case2 (fail)', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('textbox').click()
    await page.getByRole('textbox').fill('Sample1 Case2')
    await page.getByRole('textbox').press('Enter')

    await expect(page).toHaveTitle(/Hoge/)
  })

  test('Case3 (Page Object Model)', async ({ page }) => {
    const google = new Google(page)

    await google.goto()
    await google.search('Sample1 Case3')

    await expect(page).toHaveTitle(/Sample1 Case3/)
  })
})
