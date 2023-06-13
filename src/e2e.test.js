import { beforeAll, beforeEach, describe, test, expect } from 'vitest';
import puppeteer from 'puppeteer';
import {
  mdiChevronDown,
  mdiChevronRight,
  mdiCheckboxBlankCircleOutline,
  mdiCheckboxMarkedCircleOutline,
} from '@mdi/js';

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch();
});

describe('h1', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('exits', async () => {
    const text = await page.$eval('h1', el => el.textContent);
    expect(text).toBe('todos');
  }, 5000);
});

describe('input', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const isInput = await page.$eval('input[name=todo-input]', el => !!el);
    expect(isInput).toBe(true);
  }, 5000);

  test('works correctly', async () => {
    await page.click('input');
    await page.keyboard.type('React');
    const text = await page.$eval('input[name=todo-input]', el => el['value']);
    expect(text).toBe('React');
  }, 5000);
});

describe('the button named Add todos', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('button[name=add-todo]', el => el.textContent);
    expect(text).toBe('Add todo');
  }, 5000);

  test('adds text to the list', async () => {
    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');

    const text = await page.$eval('.todo-wrapper > p', el => el.textContent);
    expect(text).toBe('React');
  }, 5000);
});

describe('the paragraph', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('exits', async () => {
    const text = await page.$eval('.todo-list-heading', el => el.textContent);
    expect(text).toBe('What needs to be done?');
  }, 5000);
});

describe('the down-arrow', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const value = await page.$eval('.todo-list-arrow-down > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiChevronDown);
  }, 5000);

  test('changes to right-arrow when clicking', async () => {
    await page.click('.todo-list-arrow-down > path');

    const value = await page.$eval('.todo-list-arrow-right > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiChevronRight);
  }, 5000);
});

describe('the checkbox icon', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('is blank when adding text', async () => {
    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');

    const value = await page.$eval('.todo-wrapper > svg > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiCheckboxBlankCircleOutline);
  }, 5000);

  test('changes to marked icon when clicking', async () => {
    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');

    await page.click('.todo-wrapper > svg > path');
    const value = await page.$eval('.todo-wrapper > svg > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiCheckboxMarkedCircleOutline);
  }, 5000);
});

describe('text', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('turns stricken through when clicking the checkbox icon', async () => {
    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');

    await page.click('.todo-wrapper > svg > path');
    const value = await page.$eval('.todo-wrapper > p', el => getComputedStyle(el).textDecoration);
    expect(value.split(' ')[0]).toBe('line-through');
  }, 5000);
});

describe('the information about items left', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('displays correctly', async () => {
    const p = '.items-left';

    const text_0 = await page.$eval(p, el => el.textContent);
    expect(text_0).toBe('0 items left');

    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');

    const text_1 = await page.$eval(p, el => el.textContent);
    expect(text_1).toBe('1 items left');

    await page.click('.todo-wrapper > svg > path');

    const text_2 = await page.$eval(p, el => el.textContent);
    expect(text_2).toBe('0 items left');
  }, 5000);
});

describe('the button named All', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const p = 'button[name=all]';

    const text = await page.$eval(p, el => el.textContent);
    expect(text).toBe('All');

    const border = await page.$eval(p, el => getComputedStyle(el).border);
    expect(border).toBe('1px solid rgb(139, 0, 0)');
  }, 5000);
});

describe('the button named Active', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('button[name=active]', el => el.textContent);
    expect(text).toBe('Active');
  }, 5000);

  test('works correctly', async () => {
    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');
    await page.click('.todo-wrapper > svg > path');

    await page.click('button[name=active]');
    const inner_html = await page.$eval('ul', el => el.innerHTML);
    expect(inner_html).toBe('');
  }, 5000);
});

describe('the button named Completed', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('button[name=completed]', el => el.textContent);
    expect(text).toBe('Completed');
  }, 5000);

  test('works correctly', async () => {
    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');
    await page.click('.todo-wrapper > svg > path');

    await page.click('button[name=completed]');
    const value = await page.$eval('.todo-wrapper > p', el => getComputedStyle(el).textDecoration);
    expect(value.split(' ')[0]).toBe('line-through');
  }, 5000);
});

describe('the button named Clear completed', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('button[name=clear-completed]', el => el.textContent);
    expect(text).toBe('Clear completed');
  }, 5000);

  test('works correctly', async () => {
    await page.click('input[name=todo-input]');
    await page.keyboard.type('React');

    await page.click('button[name=add-todo]');
    await page.click('.todo-wrapper > svg > path');

    await page.click('button[name=clear-completed]');
    const inner_html = await page.$eval('ul', el => el.innerHTML);
    expect(inner_html).toBe('');
  }, 5000);
});













