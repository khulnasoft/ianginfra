import { expect, test } from "@playwright/test";

test(
  "should be able to see error when something goes wrong on Code Modal",
  { tag: ["@release"] },
  async ({ page }) => {
    await page.goto("/");

    let modalCount = 0;

    try {
      const modalTitleElement = await page?.getByTestId("modal-title");
      if (modalTitleElement) {
        modalCount = await modalTitleElement.count();
      }
    } catch (error) {
      modalCount = 0;
    }

    while (modalCount === 0) {
      await page.getByText("New Flow", { exact: true }).click();
      await page.waitForTimeout(3000);
      modalCount = await page.getByTestId("modal-title")?.count();
    }

    await page.waitForSelector('[data-testid="blank-flow"]', {
      timeout: 30000,
    });

    await page.getByTestId("blank-flow").click();

    await page.waitForTimeout(1000);

    await page.getByTestId("sidebar-custom-component-button").click();

    await page.getByTestId("zoom_out").click();
    await page.getByTestId("zoom_out").click();

    await page.getByTestId("div-generic-node").click();
    await page.getByTestId("code-button-modal").click();

    const customCodeWithError = `
# from langinfra.field_typing import Data
from langinfra.custom import Component
from langinfra.io import MessageTextInput, Output
from langinfra.schema import Data
import pytorch

class CustomComponent(Component):
    display_name = "Custom Component"
    description = "Use as a template to create your own component."
    documentation: str = "http://docs.langinfra.org/components/custom"
    icon = "custom_components"
    name = "CustomComponent"

    inputs = [
        MessageTextInput(name="input_value", display_name="Input Value", value="Hello, World!"),
    ]

    outputs = [
        Output(display_name="Output", name="output", method="build_output"),
    ]

    def build_output(self) -> Data:
        data = Data(value=self.input_value)
        self.status = data
        return data
  `;

    await page.locator("textarea").press("Control+a");
    await page.locator("textarea").fill(customCodeWithError);

    await page.getByText("Check & Save").last().click();

    await page.waitForTimeout(1000);

    const error = await page
      .getByTestId("title_error_code_modal")
      .textContent();

    expect(error!.length).toBeGreaterThan(20);
  },
);
