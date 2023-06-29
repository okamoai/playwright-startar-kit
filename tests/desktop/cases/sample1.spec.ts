import { test, expect } from '@playwright/test'

import Google from '@/desktop/helpers/google'

test.describe('Sample1', () => {
  test('Case1 (success)', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('combobox').click()
    await page.getByRole('combobox').fill('Sample1 Case1')
    await page.getByRole('combobox').press('Enter')

    await expect(page).toHaveTitle(/Sample1 Case1/)
  })

  test('Case2 (fail)', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('combobox').click()
    await page.getByRole('combobox').fill('Sample1 Case2')
    await page.getByRole('combobox').press('Enter')

    await expect(page).toHaveTitle(/Hoge/)
  })

  test('Case3 (Page Object Model)', async ({ page }) => {
    const google = new Google(page)

    await google.goto()
    await google.search('Sample1 Case3')

    await expect(page).toHaveTitle(/Sample1 Case3/)
  })
})
