import { test } from "@playwright/test";

test(
  "CodeAreaModalComponent",
  { tag: ["@release", "@workspace"] },
  async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector('[data-testid="mainpage_title"]', {
      timeout: 30000,
    });

    await page.waitForSelector('[id="new-project-btn"]', {
      timeout: 30000,
    });

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
      await page.waitForSelector('[data-testid="modal-title"]', {
        timeout: 3000,
      });
      modalCount = await page.getByTestId("modal-title")?.count();
    }

    await page.waitForSelector('[data-testid="blank-flow"]', {
      timeout: 30000,
    });

    await page.getByTestId("blank-flow").click();
    await page.getByTestId("sidebar-search-input").click();
    await page.getByTestId("sidebar-search-input").fill("python function");

    await page.waitForSelector('[data-testid="sidebar-options-trigger"]', {
      timeout: 3000,
    });

    await page.getByTestId("sidebar-options-trigger").click();
    await page
      .getByTestId("sidebar-legacy-switch")
      .isVisible({ timeout: 5000 });
    await page.getByTestId("sidebar-legacy-switch").click();

    await page.waitForSelector('[data-testid="prototypesPython Function"]', {
      timeout: 3000,
    });
    await page.getByTestId("prototypesPython Function").hover();
    await page
      .getByTestId("prototypesPython Function")
      .getByTestId("icon-Plus")
      .click();
    await page.getByTestId("fit_view").click();
    await page.getByTestId("zoom_out").click();
    await page.getByTestId("div-generic-node").click();

    await page.getByTestId("code-button-modal").click();

    const wCode =
      'def python_function(text: str) -> st:    """This is a default python function that returns the input text"""    return text';

    const customComponentCode = `from typing import Callable
from langinfra.field_typing import Code
from langinfra.interface.custom.custom_component import CustomComponent
from langinfra.interface.custom.utils import get_function

class PythonFunctionComponent(CustomComponent):
    def python_function(text: str) -> str:
        """This is a default python function that returns the input text"""
        return text`;

    await page
      .locator("#CodeEditor div")
      .filter({ hasText: "PythonFunctionComponent" })
      .nth(1)
      .click();
    await page.locator("textarea").press("Control+a");
    await page.locator("textarea").fill(wCode);
    await page.locator('//*[@id="checkAndSaveBtn"]').click();
    await page.locator("textarea").press("Control+a");
    await page.locator("textarea").fill(wCode);
    await page.locator("textarea").fill(customComponentCode);
    await page.locator('//*[@id="checkAndSaveBtn"]').click();
  },
);
