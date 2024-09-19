const fs = require("fs");
const path = require("path");

it("IIFE should present for inner strict", () => {
	const source = fs.readFileSync(path.join(__dirname, "bundle0.js"), "utf-8");
	expect(source).toContain(`This entry need to be wrapped in an IIFE because it need to be in strict mode.`);
});
