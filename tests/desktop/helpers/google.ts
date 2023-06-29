import { Page } from '@playwright/test'

export default class Google {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('/')
  }

  async search(input: string) {
    await this.page.getByRole('combobox').click()
    await this.page.getByRole('combobox').fill(input)
    await this.page.getByRole('combobox').press('Enter')
  }
}
