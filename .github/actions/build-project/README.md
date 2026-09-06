# Build Project Action

A custom GitHub Action for building the Next.js project.

## Usage

```yaml
- name: Build project
  uses: ./.github/actions/build-project
  with:
    node-version: '18.x'
```

## Inputs

- `node-version` (optional): Node.js version to use (default: '18.x')

## Description

This action runs `npm run build` to build the Next.js project for deployment.
