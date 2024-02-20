import { test, expect } from '@playwright/test';

test('Bouton candidature', async ({ page }) => {
    await page.goto('https://www.mydigitalschool.com/ecole-multimedia-lyon?gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3KhAJ0P2I-QtbLniSdc1DCm-TI_a626kgjJBda3R5JntsjGWBp5acsaAsyGEALw_wcB');
    await page.getByRole('button', { name: 'Avec plaisir' }).click();

  await expect(page.locator('#navbarResponsive').getByRole('link', { name: 'Candidature' })).toBeVisible();
});

test('candidature', async ({ page }) => {
    await page.goto('https://www.mydigitalschool.com/ecole-multimedia-lyon?gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3KhAJ0P2I-QtbLniSdc1DCm-TI_a626kgjJBda3R5JntsjGWBp5acsaAsyGEALw_wcB');
    await page.getByRole('button', { name: 'Avec plaisir' }).click();
    await page.locator('#navbarResponsive').getByRole('link', { name: 'Candidature' }).click();
    await page.getByLabel('École envisagée').selectOption('464');
    await page.getByLabel('Formation envisagée', { exact: true }).selectOption('38106');
    await page.getByPlaceholder('Prénom *').click();
    await page.getByPlaceholder('Prénom *').fill('John');
    await page.getByPlaceholder('Prénom *').press('Tab');
    await page.getByPlaceholder('Nom *', { exact: true }).fill('Due');
    await page.getByPlaceholder('Email *').click();
    await page.getByPlaceholder('Email *').fill('johndue@gmail.com');
    await page.getByPlaceholder('Téléphone *').click();
    await page.getByPlaceholder('Téléphone *').fill('+33666666666');
    await page.getByLabel('Niveau d\'études').selectOption('517');
    await page.getByLabel('Pour valider le formulaire,').check();
    await page.getByRole('button', { name: 'Télécharger' }).click();
    await expect(page.getByRole('heading', { name: 'Demande de candidature' })).toBeVisible();
});

test('Deckad check url', async ({ page }) => {
    await page.goto('https://deckad.fr/');

  await expect(page).toHaveURL('https://deckad.fr/');
});


