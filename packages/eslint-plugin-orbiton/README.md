# eslint-plugin-orbiton

Eslint for orbiton

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-orbiton`:

```sh
npm install eslint-plugin-orbiton --save-dev
```

## Usage

Add `orbiton` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "orbiton"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "orbiton/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


