# Day 24 – Exercise

## Context

Define a testing strategy using **prompts** so you (or the AI) can generate unit tests, integration tests, and QA scenarios consistently. Target [../../apps/ecommerce](../../apps/ecommerce).

## Step 1: Unit test prompt

Write a prompt template for generating unit tests. Example:

"For the [function/module] in [file path], write unit tests that cover: (1) happy path, (2) edge cases (empty input, invalid input), (3) error handling. Use [test framework]. Do not test implementation details—only inputs and outputs. Output only the test file."

Save as `prompts/unit-test-prompt.md` or in `docs/testing.md`.

## Step 2: Integration test prompt

Write a prompt template for generating integration tests (e.g. API tests). Example:

"For the e-commerce API in `apps/ecommerce`, write integration tests for [endpoint or flow]: (1) success case with valid request, (2) validation failure (missing/invalid fields), (3) auth required (401 when no token). Use [tool: e.g. supertest, fetch]. Output only the test file."

Save as `prompts/integration-test-prompt.md` or add to `docs/testing.md`.

## Step 3: QA validation prompt

Write a prompt for manual QA or acceptance criteria. Example:

"Act as QA. For the feature [X], list: (1) happy path steps and expected result, (2) edge cases to try (empty cart, expired coupon, etc.), (3) error scenarios (network failure, invalid input) and expected UI/API response. Output a short checklist, not code."

Save as `prompts/qa-validation-prompt.md` or add to `docs/testing.md`.

## Step 4: Generate one test (optional)

Use one of the prompts to generate a small unit test or one integration test for the e-commerce app. Add it to the repo and run it.
