function normalizeUnits(manifest) {
  const copy = { ...manifest };

  if (copy.unit === "lb") {
    copy.weight = Number((copy.weight * 0.45).toFixed(2));
    copy.unit = "kg";
  }

  return copy;
}

function validateManifest(manifest) {
  const result = {};

  const required = ["containerId", "destination", "weight", "unit", "hazmat"];

  for (let key of required) {
    if (!(key in manifest)) {
      result[key] = "Missing";
      continue;
    }

    const value = manifest[key];

    if (key === "containerId") {
      if (!Number.isInteger(value) || value <= 0) {
        result[key] = "Invalid";
      }
    }

    if (key === "destination") {
      if (typeof value !== "string" || value.trim().length === 0) {
        result[key] = "Invalid";
      }
    }

    if (key === "weight") {
      if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
        result[key] = "Invalid";
      }
    }

    if (key === "unit") {
      if (value !== "kg" && value !== "lb") {
        result[key] = "Invalid";
      }
    }

    if (key === "hazmat") {
      if (typeof value !== "boolean") {
        result[key] = "Invalid";
      }
    }
  }

  return result;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  const containerId = manifest.containerId;

  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${containerId}`);
    console.log(errors);
  }
}
