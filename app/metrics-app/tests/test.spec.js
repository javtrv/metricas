import { test, expect } from '@playwright/test'
const URL = 'http://localhost:5173'

test('has title', async ({ page }) => {
  await page.goto(URL)
  await expect(page).toHaveTitle('Metrics App')
})

test('has header', async ({ page }) => {
  await page.goto(URL)
  const h1 = page.locator('h1')
  await expect(h1).toHaveText('Metrics')
})

test('show add form', async ({ page }) => {
  await page.goto(URL)
  await page.getByTestId('button-add-metrics').click()
  const form = await page.getByTestId('form-add-metric')
  await expect(form).toBeVisible()
})

test('show reports form', async ({ page }) => {
  await page.goto(URL)
  await page.getByTestId('button-reports').click()
  const form = await page.getByTestId('form-reports')
  await expect(form).toBeVisible()
})

test('add metric', async ({ page }) => {
  await page.goto(URL)
  await page.getByTestId('button-add-metrics').click()
  await page.getByTestId('select-metric-name').selectOption('Click')
  await page.getByTestId('input-metric-value').fill('10')
  await page.getByTestId('input-metric-date').fill('2023-03-02T05:15')
  await page.getByTestId('button-add-metric-submit').click()
  const metric = await page.getByTestId('message-add-metric')
  await expect(metric).toHaveText('Metric added successfully')
})

test('show reports', async ({ page }) => {
  await page.goto(URL)
  await page.getByTestId('button-reports').click()
  await page.getByTestId('start-date-reports').fill('2023-03-02T05:15')
  await page.getByTestId('end-date-reports').fill('2023-03-03T05:15')
  await page.getByTestId('button-reports-submit').click()
  const table = await page.getByTestId('table-reports')
  await expect(table).toBeVisible()
})
