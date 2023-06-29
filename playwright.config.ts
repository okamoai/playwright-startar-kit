import { defineConfig, devices } from '@playwright/test'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      testDir: './tests/desktop',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      testDir: './tests/desktop',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      testDir: './tests/desktop',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      testDir: './tests/mobile',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      testDir: './tests/mobile',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  testDir: './tests',

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    video: 'retain-on-failure',
  },

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
})
