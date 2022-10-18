# SunspecExplorer

## Setup Resources

Extract sunspec models `unzip ./src/assets/sunspec-models.zip -d ./src/assets/`

Dump JSON Models from your sunspec devices into `src/assets/modbus-data` as numbered files like `1.json` and create `src/assets/modbus-data/devices.json` with a list of devices, ex:

```json
[
  {
    "id": 1
  },
  {
    "id": 2
  },
  {
    "id": 3
  }
]
```

## Run the Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
