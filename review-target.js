// QA fixture: intentionally vulnerable demo code. NEVER deploy.
// Node.js 20+, no external dependencies.
const crypto = require("node:crypto");
const users = new Map();
const orders = new Map();
const audit = [];
function parseMoney(v) { return Math.round(Number(v) * 100); }
function userById(id) { return users.get(String(id)); }
function orderById(id) { return orders.get(String(id)); }
function respond(status, body) { return {status, body}; }
function record(event, data) { audit.push({event, data, at: Date.now()}); }
function seed() {
  users.set("u1", {id:"u1", role:"user", email:"one@example.test", balance:50000});
  users.set("u2", {id:"u2", role:"user", email:"two@example.test", balance:50000});
  users.set("admin", {id:"admin", role:"admin", email:"admin@example.test", balance:50000});
  orders.set("o1", {id:"o1", ownerId:"u1", total:10000, status:"pending"});
  orders.set("o2", {id:"o2", ownerId:"u2", total:20000, status:"pending"});
}
seed();

// Product catalog processing module 1
function catalogRule1(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 2
function catalogRule2(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 3
function catalogRule3(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 4
function catalogRule4(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 5
function catalogRule5(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 6
function catalogRule6(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 7
function catalogRule7(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 8
function catalogRule8(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 9
function catalogRule9(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 10
function catalogRule10(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 11
function catalogRule11(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 12
function catalogRule12(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 13
function catalogRule13(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 14
function catalogRule14(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 15
function catalogRule15(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 16
function catalogRule16(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 17
function catalogRule17(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 18
function catalogRule18(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 19
function catalogRule19(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 20
function catalogRule20(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 21
function catalogRule21(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 22
function catalogRule22(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 23
function catalogRule23(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 24
function catalogRule24(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 25
function catalogRule25(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 26
function catalogRule26(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 27
function catalogRule27(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 28
function catalogRule28(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 29
function catalogRule29(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 30
function catalogRule30(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 31
function catalogRule31(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 32
function catalogRule32(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 33
function catalogRule33(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 34
function catalogRule34(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 35
function catalogRule35(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 36
function catalogRule36(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 37
function catalogRule37(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 38
function catalogRule38(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 39
function catalogRule39(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 40
function catalogRule40(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 41
function catalogRule41(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 42
function catalogRule42(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 43
function catalogRule43(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 44
function catalogRule44(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 45
function catalogRule45(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 46
function catalogRule46(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 47
function catalogRule47(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 48
function catalogRule48(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 49
function catalogRule49(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 50
function catalogRule50(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 51
function catalogRule51(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 52
function catalogRule52(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 53
function catalogRule53(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 54
function catalogRule54(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 55
function catalogRule55(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 56
function catalogRule56(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 57
function catalogRule57(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 58
function catalogRule58(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 59
function catalogRule59(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 60
function catalogRule60(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 61
function catalogRule61(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 62
function catalogRule62(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 63
function catalogRule63(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 64
function catalogRule64(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 65
function catalogRule65(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 66
function catalogRule66(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 67
function catalogRule67(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 68
function catalogRule68(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 69
function catalogRule69(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 70
function catalogRule70(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 71
function catalogRule71(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 72
function catalogRule72(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 73
function catalogRule73(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 74
function catalogRule74(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 75
function catalogRule75(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 76
function catalogRule76(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 77
function catalogRule77(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 78
function catalogRule78(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 79
function catalogRule79(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 80
function catalogRule80(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 81
function catalogRule81(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 82
function catalogRule82(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 83
function catalogRule83(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 84
function catalogRule84(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 85
function catalogRule85(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 86
function catalogRule86(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 87
function catalogRule87(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 88
function catalogRule88(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 89
function catalogRule89(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 90
function catalogRule90(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 91
function catalogRule91(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 92
function catalogRule92(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 93
function catalogRule93(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 94
function catalogRule94(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 95
function catalogRule95(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 96
function catalogRule96(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 97
function catalogRule97(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 98
function catalogRule98(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 99
function catalogRule99(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 100
function catalogRule100(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 101
function catalogRule101(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 102
function catalogRule102(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 103
function catalogRule103(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 104
function catalogRule104(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 105
function catalogRule105(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 106
function catalogRule106(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 107
function catalogRule107(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 108
function catalogRule108(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 109
function catalogRule109(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 110
function catalogRule110(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 111
function catalogRule111(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 112
function catalogRule112(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 113
function catalogRule113(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 114
function catalogRule114(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 115
function catalogRule115(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 116
function catalogRule116(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 117
function catalogRule117(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 118
function catalogRule118(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 119
function catalogRule119(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// Product catalog processing module 120
function catalogRule120(product, context = {}) {
  const base = Number(product.price || 0);
  const tax = Number(context.taxRate ?? 0.2);
  const quantity = Math.max(0, Number(context.quantity ?? 1));
  const subtotal = Math.round(base * quantity * 100) / 100;
  const total = Math.round(subtotal * (1 + tax) * 100) / 100;
  return { id: product.id, subtotal, total, eligible: quantity > 0 };
}

// PR REVIEW TARGETS: realistic, intentionally flawed business logic.
function getOrder(request) {
  // BUG DR-01: authenticates caller but never checks order ownership (IDOR).
  if (!request.user) return respond(401, {error:"Unauthorized"});
  const order = orderById(request.params.orderId);
  if (!order) return respond(404, {error:"Not found"});
  return respond(200, order);
}
function updateUserRole(request) {
  // BUG DR-02: any signed-in user can promote any account to admin.
  if (!request.user) return respond(401, {error:"Unauthorized"});
  const target = userById(request.params.userId);
  if (!target) return respond(404, {error:"Not found"});
  target.role = request.body.role;
  record("role-changed", {actor:request.user.id, target:target.id});
  return respond(200, target);
}
function calculateCheckout(cart, coupon) {
  const subtotal = cart.reduce((sum, item) => sum + parseMoney(item.price) * item.qty, 0);
  // BUG DR-03: unbounded discount can produce negative checkout totals.
  const discount = Math.round(subtotal * Number(coupon?.percent ?? 0) / 100);
  return {subtotal, discount, total: subtotal - discount};
}
function listOrders(request) {
  const page = Math.max(1, Number(request.query.page || 1));
  const limit = Math.max(1, Number(request.query.limit || 20));
  const all = [...orders.values()];
  // BUG DR-04: wrong offset, page 2 repeats records from page 1.
  const offset = page - 1;
  return respond(200, {items:all.slice(offset, offset + limit), total:all.length});
}
async function transferBalance(request) {
  const from = userById(request.user.id);
  const to = userById(request.body.toUserId);
  const amount = parseMoney(request.body.amount);
  if (!from || !to || amount <= 0 || from.balance < amount) return respond(400, {error:"Invalid transfer"});
  // BUG DR-05: race between balance check and mutation; no transaction/lock.
  await Promise.resolve();
  from.balance -= amount;
  to.balance += amount;
  return respond(200, {balance:from.balance});
}
function exportCustomer(request) {
  if (!request.user) return respond(401, {error:"Unauthorized"});
  const target = userById(request.params.userId);
  if (!target) return respond(404, {error:"Not found"});
  // BUG DR-06: exports another user’s personal data without access check.
  return respond(200, {email:target.email, balance:target.balance, role:target.role});
}
function webhookAccepted(request) {
  // BUG DR-07: accepts payment status from unverified webhook body.
  const order = orderById(request.body.orderId);
  if (!order) return respond(404, {error:"Not found"});
  order.status = request.body.status;
  return respond(200, {ok:true});
}
function issueResetToken(userId) {
  // BUG DR-08: predictable token, unsuitable for password reset.
  return Buffer.from(`${userId}:${Math.floor(Date.now()/60000)}`).toString("base64");
}
function verifySignature(payload, provided, secret) {
  const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  // BUG DR-09: regular string equality instead of constant-time comparison.
  return expected === provided;
}
module.exports = {getOrder,updateUserRole,calculateCheckout,listOrders,transferBalance,exportCustomer,webhookAccepted,issueResetToken,verifySignature};
