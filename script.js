const productData = [
  ["Terracotta Morning Vase","Pottery",650,"Meera's Pottery","https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80","Bestseller"],
  ["Handloom Cotton Saree","Textiles",1850,"Heritage Weaves","https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80","Made to order"],
  ["Stoneware Breakfast Bowl","Pottery",480,"Earth & Clay","https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=700&q=80",""],
  ["Sunlit Beaded Earrings","Jewellery",850,"Anaya Crafts","https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80","Bestseller"],
  ["Handwoven Cushion Cover","Textiles",550,"Village Looms","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",""],
  ["Everyday Pendant Necklace","Jewellery",1200,"Crafted Traditions","https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",""],
  ["Handcrafted Ceramic Dinnerware Set","Home Decor",2850,"KalaNova Studio","assets/handcrafted-dinnerware.jpg","New collection"],
  ["Jute Market Tote","Bags",750,"Nature Knots","https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",""],
  ["Silver-Finish Ring","Jewellery",600,"Little Artisans","https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",""],
  ["Rustic Clay Planter","Pottery",350,"Earth & Clay","https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Embroidered Table Runner","Textiles",900,"Heritage Weaves","https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=700&q=80",""],
  ["Brass Sun Pendant","Jewellery",1400,"Anaya Crafts","https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80",""],
  ["Evening Glow Clay Lamp","Home Decor",1100,"Meera's Pottery","https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",""],
  ["Handloom Cotton Scarf","Textiles",480,"Village Looms","https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Beaded Earth Bracelet","Jewellery",300,"Crafted Traditions","https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Hand-painted Tea Cup","Pottery",420,"Little Clay Studio","https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Block-print Table Linen","Textiles",780,"Indigo House","https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=700&q=80",""],
  ["Woven Everyday Sling","Bags",980,"Nature Knots","https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",""],
  ["Carved Wooden Serving Tray","Home Decor",1350,"Wood & Grain","https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80",""],
  ["Miniature Folk Art Print","Art",650,"Katha Studio","https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=80",""],
  ["Hand-thrown Terracotta Mug","Pottery",390,"Meera's Pottery","https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Natural-dye Cotton Dupatta","Textiles",1450,"Indigo House","https://images.unsplash.com/photo-1610044844031-8d3d1a7c2b0b?auto=format&fit=crop&w=700&q=80",""],
  ["Floral Brass Studs","Jewellery",520,"Anaya Crafts","https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",""],
  ["Handwoven Storage Basket","Home Decor",720,"Earth Loom","https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",""],
  ["Kantha Stitch Pouch","Bags",450,"Village Looms","https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Handmade Paper Journal","Art",320,"Katha Studio","https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Carved Stone Incense Holder","Home Decor",580,"Stone Story","https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",""],
  ["Woven Laptop Sleeve","Bags",890,"Nature Knots","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",""],
  ["Botanical Art Postcard Set","Art",260,"Katha Studio","https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Textured Ceramic Bud Vase","Pottery",790,"Earth & Clay","https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=80",""],

  ["Indigo Block-Print Cushion Pair","Textiles",780,"Indigo House","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80","Hand printed"],
  ["Handwoven Jute Planter Basket","Home Decor",620,"Earth Loom","https://images.unsplash.com/photo-1599685315640-4ec7f7c1f0a5?auto=format&fit=crop&w=700&q=80","Natural fibre"],
  ["Terracotta Serving Platter","Pottery",1150,"Meera's Pottery","assets/handcrafted-dinnerware.jpg","Artisan pick"],
  ["Brass Lotus Diya Set","Home Decor",890,"Dhokra & Brass","https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80","Festive favourite"],
  ["Hand-embroidered Sling Bag","Bags",1250,"Village Looms","https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80","Hand stitched"],
  ["Natural Indigo Table Napkins","Textiles",540,"Indigo House","https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=700&q=80","Natural dye"],
  ["Ceramic Oil Pourer","Pottery",680,"Earth & Clay","https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80","Small batch"],
  ["Dokra Tribal Wall Hanging","Home Decor",1750,"Dhokra & Brass","https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80","Heritage craft"],
  ["Handmade Cotton Notebook","Art",290,"Katha Studio","https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80","Recycled paper"],
  ["Wood-Carved Serving Spoons","Home Decor",460,"Wood & Grain","https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80","Carved by hand"],
  ["Kutch Mirror-Work Pouch","Bags",720,"Village Looms","https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=80","Mirror work"],
  ["Hand-painted Ceramic Mug Pair","Pottery",760,"Little Clay Studio","assets/handcrafted-dinnerware.jpg","Gift-ready"],
  ["Woven Cotton Table Runner","Textiles",980,"Heritage Weaves","https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=700&q=80","Loom woven"],
  ["Brass Leaf Bookmark","Art",240,"Katha Studio","https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80","Under ₹500"],
  ["Handcrafted Stoneware Bowl Set","Pottery",1490,"Earth & Clay","assets/handcrafted-dinnerware.jpg","Set of two"],
  ["Block-Printed Everyday Tote","Bags",590,"Indigo House","https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80","Reusable"],
  ["Madhubani Folk Art Mini Print","Art",850,"Katha Studio","https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=80","Folk art"],
  ["Handwoven Coaster Set","Home Decor",390,"Earth Loom","https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80","Set of four"],
  ["Beaded Festival Necklace","Jewellery",1350,"Anaya Crafts","https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80","Hand assembled"],
  ["Ceramic Side Plate Set","Home Decor",1680,"KalaNova Studio","assets/handcrafted-dinnerware.jpg","Set of four"]
];

let products = productData.map((p, i) => ({id:i+1,name:p[0],category:p[1],price:p[2],artisan:p[3],image:p[4],badge:p[5],stock:true,created:i}));
let favorites = new Set();
let cart = new Map();
let notifications = [];
let userProducts = loadSaved("kalanova-products", []);
let artisanProfile = loadSaved("kalanova-profile", {name:"", craft:"", location:"", story:"", image:""});
let nextId = Math.max(31, ...userProducts.map(p => Number(p.id) + 1));
let editingProductId = null;
let selectedProfileImage = artisanProfile.image || "";
let activeCategory = "All";
let activeDrawer = "";
let selectedImage = "";
const $ = id => document.getElementById(id);
const money = n => "₹" + Number(n).toLocaleString("en-IN");
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const allProducts = () => [...products,...userProducts];
function loadSaved(key, fallback) {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
}
function saveSaved(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { toast("Browser storage is full. Try using smaller images.", true); return false; }
}
function persistProducts() { saveSaved("kalanova-products", userProducts); }
function updateInventoryStats() {
  if($("artisan-product-count")) $("artisan-product-count").textContent = userProducts.length;
  if($("total-stock")) $("total-stock").textContent = userProducts.reduce((sum,p)=>sum+Math.max(0,Number(p.stockQty)||0),0).toLocaleString("en-IN");
  if($("stock-value")) $("stock-value").textContent = money(userProducts.reduce((sum,p)=>sum+(Number(p.price)||0)*(Math.max(0,Number(p.stockQty)||0)),0));
}
function applyProfileToForm() {
  $("profile-name").value = artisanProfile.name || "";
  $("profile-craft").value = artisanProfile.craft || "";
  $("profile-location").value = artisanProfile.location || "";
  $("profile-story").value = artisanProfile.story || "";
  if (artisanProfile.image) { $("profile-image-preview").src=artisanProfile.image; $("profile-image-preview-wrap").hidden=false; $("profile-avatar").innerHTML=`<img src="${escapeHTML(artisanProfile.image)}" alt="Artisan profile">`; }
  else if (artisanProfile.name) $("profile-avatar").textContent=artisanProfile.name.trim().charAt(0).toUpperCase();
}

function toast(message, error=false) {
  const el = document.createElement("div");
  el.className = "toast" + (error ? " error" : "");
  el.textContent = message;
  $("toast-region").append(el);
  setTimeout(() => el.remove(), 3200);
}
function addNotification(message) {
  notifications.unshift({id:Date.now()+Math.random(),message,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})});
  updateCounts();
  if(activeDrawer==="notifications") renderDrawer();
}
function updateCounts() {
  if($("favorite-count")) $("favorite-count").textContent = favorites.size;
  if($("cart-count")) $("cart-count").textContent = [...cart.values()].reduce((n,p)=>n+p.qty,0);
  if($("artisan-product-count")) $("artisan-product-count").textContent = userProducts.length;
}
function visibleProducts() {
  const query = $("search-input").value.trim().toLowerCase();
  const min = $("min-price").value === "" ? 0 : Number($("min-price").value);
  const max = $("max-price").value === "" ? Infinity : Number($("max-price").value);
  const chosenTypes = [...document.querySelectorAll(".type-filter:checked")].map(el=>el.value);
  const rangeMax = Number($("price-range").value);
  let list = allProducts().filter(p => {
    const matchesText = `${p.name} ${p.category} ${p.artisan}`.toLowerCase().includes(query);
    const matchesCategory = activeCategory==="All" || p.category===activeCategory;
    const matchesTypes = chosenTypes.length===0 || chosenTypes.includes(p.category);
    const matchesPrice = p.price>=min && p.price<=max && p.price<=rangeMax;
    const matchesStock = !$("in-stock-filter").checked || (p.stockQty === undefined ? p.stock : Number(p.stockQty) > 0) && (p.status || "Active") === "Active";
    return matchesText && matchesCategory && matchesTypes && matchesPrice && matchesStock;
  });
  const sort = $("sort-select").value;
  if(sort==="price-low") list.sort((a,b)=>a.price-b.price);
  if(sort==="price-high") list.sort((a,b)=>b.price-a.price);
  if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  if(sort==="newest") list.sort((a,b)=>b.created-a.created);
  return list;
}
function productCard(p) {
  if ((p.status || "Active") !== "Active" || (p.stockQty !== undefined && Number(p.stockQty) <= 0)) return "";
  return `<article class="product-card">
    <div class="product-image-wrap">
      <img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x690/e8ece2/414e3d?text=Handmade+Craft'">
      ${p.badge?`<span class="product-badge">${escapeHTML(p.badge)}</span>`:""}
      <button class="favorite-button ${favorites.has(p.id)?"active":""}" data-favorite="${p.id}" aria-label="${favorites.has(p.id)?"Remove from":"Add to"} favorites">${favorites.has(p.id)?"♥":"♡"}</button>
      <button class="quick-add" data-add="${p.id}">+ Add to bag</button>
    </div>
    <div class="product-details"><p class="product-category">${escapeHTML(p.category)}</p><h3 class="product-name">${escapeHTML(p.name)}</h3><p class="product-maker">Made by ${escapeHTML(p.artisan)}</p><div class="product-price-row"><span class="product-price">${money(p.price)}</span><span class="product-stock">● In stock</span></div><div class="product-actions"><button class="small-add" data-add="${p.id}">Add to bag</button><button class="buy-button" data-buy="${p.id}">Buy now ↗</button></div></div>
  </article>`;
}
function renderProducts() {
  if(!$("product-grid")) return;
  const list=visibleProducts();
  $("product-grid").innerHTML=list.map(productCard).join("");
  $("results-count").textContent=`Showing ${list.length} of ${allProducts().length} pieces`;
  $("empty-state").hidden=list.length>0;
  const chosenTypes=document.querySelectorAll(".type-filter:checked").length;
  const otherFilters=Number($("min-price").value!=="")+Number($("max-price").value!=="")+Number($("in-stock-filter").checked);
  const count=chosenTypes+otherFilters+(activeCategory!=="All"?1:0);
  $("active-filter-count").hidden=count===0;
  $("active-filter-count").textContent=count;
}
function renderUserProducts() {
  const query = ($("inventory-search")?.value || "").trim().toLowerCase();
  const filter = $("inventory-filter")?.value || "all";
  const filtered = userProducts.filter(p => {
    const textMatch = `${p.name} ${p.category} ${p.artisan}`.toLowerCase().includes(query);
    const qty = Math.max(0, Number(p.stockQty) || 0);
    const statusMatch = filter === "all" || (filter === "low" ? qty > 0 && qty <= 5 : filter === "out" ? qty === 0 : (p.status || "Active") === filter);
    return textMatch && statusMatch;
  });
  if(!$("my-products")) return;
  $("my-products").innerHTML = filtered.length ? filtered.map(p => {
    const qty=Math.max(0,Number(p.stockQty)||0), status=p.status||"Active";
    const stockClass=qty===0?"stock-out":qty<=5?"stock-low":"stock-good";
    return `<article class="inventory-item">
      <img class="inventory-image" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" onerror="this.onerror=null;this.src='https://placehold.co/160x160/e8ece2/414e3d?text=Craft'">
      <div class="inventory-item-info"><p class="product-category">${escapeHTML(p.category)}</p><h4>${escapeHTML(p.name)}</h4><p class="inventory-maker">${escapeHTML(p.artisan || "Independent Maker")}</p><p class="inventory-description">${escapeHTML(p.description || "No description added yet.")}</p><div class="inventory-tags"><span class="status-pill ${status === "Active" ? "status-active" : "status-draft"}">${escapeHTML(status)}</span><span class="stock-pill ${stockClass}">${qty===0?"Out of stock":qty<=5?"Low stock":"In stock"} · ${qty} units</span></div></div>
      <div class="inventory-item-side"><strong>${money(p.price)}</strong><label>Quantity<input type="number" min="0" max="100000" value="${qty}" data-stock="${p.id}" aria-label="Stock quantity for ${escapeHTML(p.name)}"></label><div class="inventory-actions"><button type="button" class="inventory-edit" data-edit="${p.id}">Edit</button><button type="button" class="inventory-delete" data-delete="${p.id}">Delete</button></div></div>
    </article>`;
  }).join("") : `<div class="inventory-empty"><span>✳</span><h4>${userProducts.length ? "No matching listings" : "Your collection starts here"}</h4><p>${userProducts.length ? "Try changing the search or filter." : "Add your first handmade piece using the form above."}</p></div>`;
  $("listing-subtitle").textContent = `${userProducts.length} listing${userProducts.length===1?"":"s"}`;
  updateInventoryStats();
}
function resetProductForm() {
  editingProductId=null; selectedImage=""; $("product-form").reset(); $("product-stock").value=5;
  $("product-form-title").textContent="Add a new piece"; $("product-submit").innerHTML="Add to collection <span>↗</span>";
  $("cancel-edit").hidden=true; $("image-preview-wrap").hidden=true; $("image-preview").removeAttribute("src");
  $("form-message").textContent="";
}
function beginEditProduct(id) {
  const p=userProducts.find(item=>item.id===id); if(!p)return;
  editingProductId=id; $("product-name").value=p.name; $("product-category").value=p.category; $("product-price").value=p.price;
  $("product-stock").value=Math.max(0,Number(p.stockQty)||0); $("product-status").value=p.status||"Active";
  $("product-artisan").value=p.artisan||""; $("product-description").value=p.description||"";
  selectedImage=p.image||"";
  if(selectedImage){$("image-preview").src=selectedImage;$("image-preview-wrap").hidden=false;}else{$("image-preview-wrap").hidden=true;}
  $("product-form-title").textContent="Edit your piece"; $("product-submit").innerHTML="Save changes <span>↗</span>"; $("cancel-edit").hidden=false;
  $("form-message").textContent="Update the details below, then save your changes.";
  $("product-form").scrollIntoView({behavior:"smooth",block:"center"});
}

let detailProductId = null;
function openDrawer(type, productId=null) {
  activeDrawer=type;
  detailProductId = productId;
  $("drawer-title").textContent=({cart:"Your bag",favorites:"Saved pieces",notifications:"Notifications","product-detail":"Product details"})[type] || "KalaNova";
  $("drawer-backdrop").hidden=false;
  $("side-drawer").classList.add("open");
  $("side-drawer").setAttribute("aria-hidden","false");
  document.body.classList.add("drawer-open");
  renderDrawer();
}
function closeDrawer() {
  activeDrawer="";
  $("side-drawer").classList.remove("open");
  $("side-drawer").setAttribute("aria-hidden","true");
  $("drawer-backdrop").hidden=true;
  document.body.classList.remove("drawer-open");
}
function renderDrawer() {
  const host=$("drawer-content");
  if(activeDrawer === "product-detail") {
    const p = allProducts().find(item => item.id === detailProductId);
    if (!p) { host.innerHTML = `<div class="drawer-empty">Product details are unavailable.</div>`; return; }
    const eta = new Date(); eta.setDate(eta.getDate()+7);
    const delivery = eta.toLocaleDateString("en-IN", {day:"numeric", month:"short", year:"numeric"});
    const description = p.description || `${p.name} is a thoughtfully made ${String(p.category||"handmade craft").toLowerCase()} piece from ${p.artisan || "an independent artisan"}. Each piece celebrates skilled making and traditional craft.`;
    host.innerHTML = `<article class="product-detail-panel"><img class="product-detail-image" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" onerror="this.onerror=null;this.src='https://placehold.co/600x690/e8ece2/414e3d?text=Handmade+Craft'"><p class="product-category">${escapeHTML(p.category)}</p><h2>${escapeHTML(p.name)}</h2><p class="product-detail-maker">Made by ${escapeHTML(p.artisan || "Independent Maker")}</p><strong class="product-detail-price">${money(p.price)}</strong><p class="product-detail-description">${escapeHTML(description)}</p><div class="delivery-note"><span>Estimated delivery</span><strong>${delivery}</strong><small>Expected within 5–7 business days; actual delivery may vary by location.</small></div><button class="button button-dark product-detail-add" data-detail-add="${p.id}">Add to bag <span>↗</span></button></article>`;
  } else if(activeDrawer==="favorites") {
    const saved=allProducts().filter(p=>favorites.has(p.id));
    host.innerHTML=saved.length?saved.map(p=>`<div class="drawer-item"><img src="${escapeHTML(p.image)}" alt=""><div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.artisan)}</p><strong>${money(p.price)}</strong><div class="drawer-item-actions"><button class="mini-action" data-drawer-add="${p.id}">Add to bag</button><button class="mini-action" data-unfavorite="${p.id}">Remove</button></div></div></div>`).join(""):`<div class="drawer-empty"><span>♡</span>Your saved pieces will live here.<br>Tap the heart on anything you love.</div>`;
  } else if(activeDrawer==="cart") {
    const items=[...cart.values()];
    const subtotal=items.reduce((sum,p)=>sum+p.price*p.qty,0);
    host.innerHTML=items.length?items.map(p=>`<div class="drawer-item"><img src="${escapeHTML(p.image)}" alt=""><div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.artisan)}</p><strong>${money(p.price)}</strong><div class="qty-control"><button data-minus="${p.id}" aria-label="Decrease quantity">−</button><span>${p.qty}</span><button data-plus="${p.id}" aria-label="Increase quantity">+</button></div></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove item">×</button></div>`).join("")+`<div class="drawer-footer"><div class="subtotal-row"><span>Subtotal</span><b>${money(subtotal)}</b></div><button class="button button-dark" id="checkout-open">Continue to checkout <span>↗</span></button><p class="drawer-note">Shipping and taxes are calculated separately.</p></div>`:`<div class="drawer-empty"><span>♧</span>Your bag is waiting for something lovely.<br>Explore the collection to begin.</div>`;
  } else {
    host.innerHTML=`<div class="drawer-heading-row"><span class="muted">${notifications.length} updates</span><button class="clear-notifications" id="clear-notifications">Clear notifications</button></div>`+(notifications.length?notifications.map(n=>`<div class="notification-item"><p>${escapeHTML(n.message)}</p><small>${escapeHTML(n.time)}</small></div>`).join(""):`<div class="drawer-empty"><span>✳</span>You're all caught up.<br>Shopping updates will appear here.</div>`);
  }
}
function addToCart(id,buyNow=false) {
  const p=allProducts().find(p=>p.id===id); if(!p)return;
  const existing=cart.get(id);
  cart.set(id,{...p,qty:existing?existing.qty+1:1});
  updateCounts();addNotification(`${p.name} added to your bag.`);toast(`${p.name} added to your bag.`);
  if(buyNow) openDrawer("cart"); else if(activeDrawer==="cart") renderDrawer();
}
function clearFilters() {
  $("search-input").value="";$("min-price").value="";$("max-price").value="";
  $("price-range").value="5000";$("range-label").textContent=money(5000);
  $("in-stock-filter").checked=false;$("sort-select").value="featured";
  document.querySelectorAll(".type-filter").forEach(el=>el.checked=false);
  activeCategory="All";
  document.querySelectorAll(".category-tile").forEach(el=>el.classList.toggle("selected",el.dataset.category==="All"));
  renderProducts();
}
if($("product-grid")) {
$("product-grid").addEventListener("click",e=>{
  const b=e.target.closest("button");
  if (b) {
    if(b.dataset.favorite){const id=Number(b.dataset.favorite);favorites.has(id)?favorites.delete(id):favorites.add(id);const p=allProducts().find(p=>p.id===id);addNotification(favorites.has(id)?`${p.name} saved to favorites.`:`${p.name} removed from favorites.`);updateCounts();renderProducts();if(activeDrawer==="favorites")renderDrawer();}
    if(b.dataset.add)addToCart(Number(b.dataset.add));
    if(b.dataset.buy)addToCart(Number(b.dataset.buy),true);
    return;
  }
  const card=e.target.closest(".product-card");
  if(card){const img=card.querySelector("img");const name=card.querySelector(".product-name")?.textContent;const p=allProducts().find(item=>item.name===name);if(p)openDrawer("product-detail",p.id);}
});
$("category-tiles").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".category-tile").forEach(el=>el.classList.toggle("selected",el===b));renderProducts();});
["search-input","min-price","max-price","sort-select","in-stock-filter"].forEach(id=>$(id).addEventListener(id==="search-input"?"input":"change",renderProducts));
document.querySelectorAll(".type-filter").forEach(el=>el.addEventListener("change",renderProducts));
$("price-range").addEventListener("input",()=>{$("range-label").textContent=money($("price-range").value);$("max-price").value=$("price-range").value;renderProducts();});
$("filter-toggle").addEventListener("click",()=>{$("filter-sidebar").classList.toggle("open");});
$("mobile-filter-open").addEventListener("click",()=>{$("filter-sidebar").classList.toggle("open");$("filter-sidebar").scrollIntoView({behavior:"smooth",block:"nearest"});});
$("clear-filters").addEventListener("click",clearFilters);$("empty-clear").addEventListener("click",clearFilters);
$("open-search").addEventListener("click",()=>{$("search-input").focus();$("shop").scrollIntoView({behavior:"smooth"});});
$("open-cart").addEventListener("click",()=>openDrawer("cart"));$("open-favorites").addEventListener("click",()=>openDrawer("favorites"));
$("close-drawer").addEventListener("click",closeDrawer);$("drawer-backdrop").addEventListener("click",closeDrawer);
$("open-notifications")?.addEventListener("click",()=>openDrawer("notifications"));
const notifButton=document.createElement("button");notifButton.className="icon-button";notifButton.id="open-notifications";notifButton.setAttribute("aria-label","Open notifications");notifButton.innerHTML="♧ <span class=\"count\" id=\"notification-count\">0</span>";$("open-cart").before(notifButton);notifButton.addEventListener("click",()=>openDrawer("notifications"));
$("menu-toggle").addEventListener("click",()=>{$("menu-toggle").textContent=$("main-nav")?.classList.contains("open")?"☰":"×";document.querySelector(".main-nav").classList.toggle("open");});
document.querySelector(".main-nav").addEventListener("click",e=>{if(e.target.closest("a"))document.querySelector(".main-nav").classList.remove("open");});
$("drawer-content").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.id==="checkout-open"){openCheckout();return;}
  if(b.dataset.detailAdd){addToCart(Number(b.dataset.detailAdd));return;}
  if(b.id==="clear-notifications"){notifications=[];renderDrawer();updateCounts();return;}
  const id=Number(b.dataset.drawerAdd||b.dataset.unfavorite||b.dataset.plus||b.dataset.minus||b.dataset.remove);
  if(b.dataset.drawerAdd){addToCart(id);renderDrawer();return;}
  if(b.dataset.unfavorite){favorites.delete(id);updateCounts();renderProducts();renderDrawer();return;}
  if(b.dataset.plus&&cart.has(id))cart.get(id).qty++;
  if(b.dataset.minus&&cart.has(id)){cart.get(id).qty--;if(cart.get(id).qty<=0)cart.delete(id);}
  if(b.dataset.remove)cart.delete(id);
  updateCounts();renderDrawer();
});
function openCheckout(){
  if(!cart.size){toast("Your bag is empty.",true);return;}
  const subtotal=[...cart.values()].reduce((sum,p)=>sum+p.price*p.qty,0);
  $("checkout-summary").textContent=`${cart.size} product type(s) · Order subtotal ${money(subtotal)} · Payment is not processed`;
  $("checkout-dialog").showModal();
}
$("checkout-dialog").addEventListener("close",()=>{});
$("checkout-dialog").querySelector("form").addEventListener("submit",e=>{
  if(e.submitter?.value!=="confirm")return;
  e.preventDefault();
  if(!$("checkout-name").value.trim()||!$("checkout-email").checkValidity()){toast("Please enter a valid name and email.",true);return;}
  const orderNo="KN-"+Math.floor(10000+Math.random()*90000);
  cart.clear();updateCounts();$("checkout-dialog").close();closeDrawer();
  addNotification(`Order ${orderNo} recorded in this session. No payment was processed.`);
  toast(`Order ${orderNo} recorded for this session. Thank you!`);
  $("checkout-name").value="";$("checkout-email").value="";
});
}

if($("artisan-profile-form")) {
$("artisan-profile-form").addEventListener("submit",e=>{
  e.preventDefault();
  artisanProfile={name:$("profile-name").value.trim(),craft:$("profile-craft").value.trim(),location:$("profile-location").value.trim(),story:$("profile-story").value.trim(),image:selectedProfileImage||""};
  saveSaved("kalanova-profile",artisanProfile); applyProfileToForm();
  $("profile-message").textContent="Your artisan profile has been saved on this device.";
  toast("Artisan profile saved.");
});
$("profile-image").addEventListener("change",()=>{
  const file=$("profile-image").files[0]; if(!file)return;
  if(!file.type.startsWith("image/")||file.size>2*1024*1024){$("profile-image").value="";toast("Choose an image under 2 MB.",true);return;}
  const reader=new FileReader();reader.onload=()=>{selectedProfileImage=reader.result;$("profile-image-preview").src=selectedProfileImage;$("profile-image-preview-wrap").hidden=false;$("profile-avatar").innerHTML=`<img src="${escapeHTML(selectedProfileImage)}" alt="Artisan profile">`;};reader.readAsDataURL(file);
});
$("product-form").addEventListener("submit",e=>{
  e.preventDefault();
  const name=$("product-name").value.trim(),category=$("product-category").value,price=Number($("product-price").value),artisan=$("product-artisan").value.trim()||artisanProfile.name||"Independent Maker",stockQty=Math.max(0,Number($("product-stock").value)||0),status=$("product-status").value,description=$("product-description").value.trim();
  if(!name||!Number.isFinite(price)||price<=0){$("form-message").textContent="Please enter a valid product name and price.";return;}
  const old=editingProductId===null?null:userProducts.find(p=>p.id===editingProductId);
  const item={id:old?old.id:nextId++,name,category,price,artisan,image:selectedImage||(old&&old.image)||"https://placehold.co/600x690/e8ece2/414e3d?text=Handmade+Craft",badge:old?old.badge:"New listing",stock:stockQty>0,stockQty,status,description,created:old?old.created:Date.now()};
  if(old) userProducts=userProducts.map(p=>p.id===old.id?item:p); else userProducts.push(item);
  persistProducts();resetProductForm();renderUserProducts();renderProducts();addNotification(old?`${name} listing updated.`:`${name} added to your collection.`);toast(old?"Your changes have been saved.":"Your new piece is now in the collection.");
});
$("cancel-edit").addEventListener("click",resetProductForm);
$("product-image").addEventListener("change",()=>{
  const file=$("product-image").files[0]; if(!file){if(!editingProductId){selectedImage="";$("image-preview-wrap").hidden=true;}return;}
  if(!file.type.startsWith("image/")||file.size>2*1024*1024){$("product-image").value="";toast("Choose an image under 2 MB.",true);return;}
  const reader=new FileReader();reader.onload=()=>{selectedImage=reader.result;$("image-preview").src=selectedImage;$("image-preview-wrap").hidden=false;};reader.readAsDataURL(file);
});
$("inventory-search").addEventListener("input",renderUserProducts);
$("inventory-filter").addEventListener("change",renderUserProducts);
$("my-products").addEventListener("change",e=>{
  const input=e.target.closest("[data-stock]");if(!input)return;
  const id=Number(input.dataset.stock),p=userProducts.find(item=>item.id===id);if(!p)return;
  p.stockQty=Math.max(0,Math.min(100000,Number(input.value)||0));p.stock=p.stockQty>0;persistProducts();renderUserProducts();renderProducts();addNotification(`${p.name} stock updated to ${p.stockQty}.`);toast("Inventory quantity updated.");
});
$("my-products").addEventListener("click",e=>{
  const edit=e.target.closest("[data-edit]");if(edit){beginEditProduct(Number(edit.dataset.edit));return;}
  const del=e.target.closest("[data-delete]");if(!del)return;
  const id=Number(del.dataset.delete),p=userProducts.find(item=>item.id===id);if(!p)return;
  if(!confirm(`Delete “${p.name}” from your listings?`))return;
  userProducts=userProducts.filter(item=>item.id!==id);favorites.delete(id);cart.delete(id);persistProducts();
  if(editingProductId===id)resetProductForm();renderUserProducts();renderProducts();updateCounts();addNotification(`${p.name} removed from your listings.`);toast("Listing deleted.");
});

}

document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDrawer();});
if($("artisan-profile-form")) applyProfileToForm();
if($("product-grid")) renderProducts();
if($("my-products")) renderUserProducts();
updateCounts();

// AI workspace: product image background removal, multilingual catalogue translation, and pricing.
if($("studio-image-input")) {
const studioInput=$("studio-image-input");
let studioImageData="", studioProcessedData="";
const studioStatus=$("studio-status");
const studioPreview=$("studio-image-preview");
const bgStyles={
  warm:{top:"#fbf7ee",bottom:"#e9dfcc"},white:{top:"#ffffff",bottom:"#f0f0ed"},
  sage:{top:"#edf1e8",bottom:"#cbd7c5"},sand:{top:"#f6ead8",bottom:"#d9c1a0"},
  charcoal:{top:"#45433f",bottom:"#171817"}
};
function setStudioImage(data){studioProcessedData=data;studioPreview.src=data;studioPreview.hidden=false;$("studio-image-placeholder-icon").hidden=true;$("studio-image-placeholder-text").hidden=true;$("studio-image-clear").hidden=false;$("studio-use-image").disabled=false;$("studio-download-image").hidden=false;$("studio-download-image").href=data;}
function applyProfessionalBackground(foregroundBlob){
 return new Promise((resolve,reject)=>{
  const fgUrl=URL.createObjectURL(foregroundBlob),fg=new Image();
  fg.onload=()=>{try{
   const canvas=document.createElement("canvas"),w=fg.naturalWidth||fg.width,h=fg.naturalHeight||fg.height;
   canvas.width=w;canvas.height=h;const ctx=canvas.getContext("2d");
   const colors=bgStyles[$("studio-background").value]||bgStyles.warm;
   const grad=ctx.createLinearGradient(0,0,w,h);grad.addColorStop(0,colors.top);grad.addColorStop(1,colors.bottom);ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
   // Soft studio spotlight and subtle grounding shadow for a polished catalogue finish.
   const glow=ctx.createRadialGradient(w*.5,h*.43,Math.min(w,h)*.04,w*.5,h*.43,Math.max(w,h)*.68);glow.addColorStop(0,"rgba(255,255,255,.34)");glow.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
   ctx.save();ctx.filter="blur("+Math.max(8,Math.round(Math.min(w,h)*.025))+"px)";ctx.fillStyle="rgba(40,32,20,.14)";ctx.beginPath();ctx.ellipse(w*.5,h*.86,w*.23,h*.035,0,0,Math.PI*2);ctx.fill();ctx.restore();
   const scale=Math.min(w*.88/fg.width,h*.84/fg.height);const dw=fg.width*scale,dh=fg.height*scale;ctx.drawImage(fg,(w-dw)/2,(h-dh)/2,dw,dh);
   canvas.toBlob(blob=>{URL.revokeObjectURL(fgUrl);if(blob)resolve(blob);else reject(new Error("Could not render the edited image."));},"image/png");
  }catch(e){URL.revokeObjectURL(fgUrl);reject(e);}};
  fg.onerror=()=>{URL.revokeObjectURL(fgUrl);reject(new Error("Could not load the cut-out image."));};fg.src=fgUrl;
 });
}
studioInput.addEventListener("change",()=>{
 const file=studioInput.files&&studioInput.files[0];if(!file)return;
 if(!file.type.startsWith("image/")||file.size>5*1024*1024){studioInput.value="";toast("Choose an image under 5 MB.",true);return;}
 const reader=new FileReader();reader.onload=()=>{studioImageData=String(reader.result||"");studioProcessedData="";setStudioImage(studioImageData);$("studio-download-image").hidden=true;$("studio-image-stage").classList.remove("treatment-bright","treatment-contrast","treatment-warm");$("studio-remove-background").disabled=false;studioStatus.textContent="Image loaded. Choose a background, then remove the original background.";};reader.readAsDataURL(file);
});
$("studio-image-clear").addEventListener("click",()=>{studioImageData="";studioProcessedData="";studioInput.value="";studioPreview.removeAttribute("src");studioPreview.hidden=true;$("studio-image-placeholder-icon").hidden=false;$("studio-image-placeholder-text").hidden=false;$("studio-image-clear").hidden=true;$("studio-use-image").disabled=true;$("studio-remove-background").disabled=true;$("studio-download-image").hidden=true;$("studio-treatment").value="none";$("studio-image-stage").classList.remove("treatment-bright","treatment-contrast","treatment-warm");studioStatus.textContent="Upload a product photo to begin.";});
$("studio-treatment").addEventListener("change",()=>{const stage=$("studio-image-stage");stage.classList.remove("treatment-bright","treatment-contrast","treatment-warm");const v=$("studio-treatment").value;if(v!=="none")stage.classList.add("treatment-"+v);});
$("studio-background").addEventListener("change",()=>{if(studioProcessedData)studioStatus.textContent="Background changed. Select Remove background & style again to apply it.";});
$("studio-remove-background").addEventListener("click",async()=>{
 if(!studioImageData)return;const btn=$("studio-remove-background");btn.disabled=true;btn.textContent="Processing image…";studioStatus.textContent="Loading the background-removal AI model. The first run can take a little while.";
 try{
  // Dynamic CDN import keeps the project easy to run without a build step. The model runs in the browser.
  const module=await import("https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.5.5/+esm");
  const sourceBlob=await (await fetch(studioImageData)).blob();
  const cutout=await module.removeBackground(sourceBlob,{model:"medium",output:{format:"image/png",quality:1}});
  studioStatus.textContent="Applying your professional studio background…";
  const finalBlob=await applyProfessionalBackground(cutout);const reader=new FileReader();reader.onload=()=>{setStudioImage(String(reader.result));studioStatus.textContent="Background removed and professional background applied. Check the edges and download or use this image.";};reader.readAsDataURL(finalBlob);
 }catch(err){console.error(err);studioStatus.textContent="Could not remove the background. Check your internet connection and open KalaNova through a local web server (not directly as a file), then try again.";toast("Background removal could not run. Check connection and browser permissions.",true);}
 finally{btn.disabled=!studioImageData;btn.textContent="Remove background & style";}
});
$("studio-use-image").addEventListener("click",()=>{if(!studioProcessedData&&!studioImageData)return;selectedImage=studioProcessedData||studioImageData;$("image-preview").src=selectedImage;$("image-preview-wrap").hidden=false;$("product-image").value="";toast("Image added to the product form. Save the listing to keep it.");$("product-form").scrollIntoView({behavior:"smooth",block:"start"});});
async function translateToEnglish(text,language){
 if(language==="en")return text;
 const pair=encodeURIComponent(language+"|en");
 const url="https://api.mymemory.translated.net/get?q="+encodeURIComponent(text.slice(0,450))+"&langpair="+pair;
 const response=await fetch(url);if(!response.ok)throw new Error("Translation service unavailable");const data=await response.json();
 const translated=data&&data.responseData&&data.responseData.translatedText;
 if(!translated||data.responseStatus&&data.responseStatus!==200||/MYMEMORY WARNING|PLEASE SELECT/i.test(translated))throw new Error("No translation returned");
 return translated.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">");
}
async function makeCatalogueDraft(){
 const notes=$("catalogue-notes").value.trim(),category=$("catalogue-category").value;
 if(!notes){$("catalogue-status").textContent="Add a few details about your craft first.";return;}
 const btn=$("catalogue-generate");btn.disabled=true;btn.textContent="Translating…";
 const words=notes.replace(/[\n\r]+/g," ").replace(/\s+/g," ").trim();const language=$("catalogue-language").value;
 let translated=words,translationSucceeded=language==="en";
 try{translated=await translateToEnglish(words,language);translationSucceeded=true;}catch(e){console.warn("Translation failed",e);translated=words;}
 const clean=translated.replace(/[\n\r]+/g," ").replace(/\s+/g," ").trim();
 let title=clean.split(/[.!?।॥！？。]/u)[0].trim();title=title.replace(/^(i make|we make|this is|it is|i create|we create|this handmade|product:?)\s+/i,"");
 if(title.length>82)title=title.slice(0,79).replace(/\s+\S*$/u,"")+"…";
 const professionalDescription=`Discover this handcrafted ${category.toLowerCase()} piece, thoughtfully made with care and attention to detail. ${clean} Please review the product details and customise this description before publishing.`;
 let localWords=[];try{localWords=clean.match(/[\p{L}\p{M}]{4,}/gu)||[];}catch(_){localWords=clean.match(/[a-z\u0900-\u097f\u0c00-\u0d7f]{4,}/gi)||[];}
 const tags=[category.toLowerCase(),"handmade","artisan craft",...localWords].filter((v,i,a)=>a.indexOf(v)===i).slice(0,10);
 $("catalogue-title").value=title;$("catalogue-description").value=words.slice(0,400);$("catalogue-translated").value=clean.slice(0,700);$("catalogue-professional-description").value=professionalDescription.slice(0,700);$("catalogue-tags").value=tags.join(", ");$("catalogue-output").hidden=false;
 $("catalogue-status").textContent=translationSucceeded?"Translated into English and prepared a professional, editable catalogue listing. Check the translation before publishing.":"Draft prepared, but online translation failed. The translated field contains your original text; check your connection and try again.";
 btn.disabled=false;btn.textContent="Create catalogue draft ↗";
}
$("catalogue-generate").addEventListener("click",makeCatalogueDraft);
$("catalogue-fill-form").addEventListener("click",()=>{$("product-name").value=$("catalogue-title").value;$ ("product-category").value=$("catalogue-category").value;$("product-description").value=$("catalogue-professional-description").value;$("product-form-title").scrollIntoView({behavior:"smooth",block:"center"});$("product-name").focus();toast("Catalogue details copied to the product form. Add a price and stock, then save.");});
$("catalogue-voice").addEventListener("click",()=>{
 const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SpeechRecognition){$("catalogue-status").textContent="Speech input is not supported in this browser. You can type your craft details instead.";return;}
 const recognition=new SpeechRecognition();const langMap={en:"en-IN",as:"as-IN",bn:"bn-IN",brx:"brx-IN",doi:"doi-IN",gu:"gu-IN",hi:"hi-IN",kn:"kn-IN",ks:"ks-IN",kok:"kok-IN",mai:"mai-IN",ml:"ml-IN",mni:"mni-IN",mr:"mr-IN",ne:"ne-NP",or:"or-IN",pa:"pa-IN",sa:"sa-IN",sat:"sat-IN",sd:"sd-IN",ta:"ta-IN",te:"te-IN",ur:"ur-IN"};
 recognition.lang=langMap[$("catalogue-language").value]||"en-IN";recognition.interimResults=false;recognition.maxAlternatives=1;$("catalogue-status").textContent="Listening… Please describe your product.";
 recognition.onresult=e=>{$("catalogue-notes").value=($("catalogue-notes").value.trim()+" "+e.results[0][0].transcript).trim();$("catalogue-status").textContent="Speech captured. Select Create catalogue draft to translate and prepare the listing.";};
 recognition.onerror=()=>{$("catalogue-status").textContent="Speech input is unavailable for this language or microphone permission is blocked. Try another language or type your notes instead.";};recognition.start();
});
 function calculateCraftPrice(){
  const readCost = id => {
    const el = $(id);
    return el ? Math.max(0, Number(el.value) || 0) : 0;
  };
  const materials = readCost("price-materials");
  const labour = readCost("price-labour");
  const other = readCost("price-other");
  const margin = Math.max(0, Math.min(300, readCost("price-margin")));
  const cost = materials + labour + other;
  const suggested = cost === 0 ? 0 : Math.ceil((cost * (1 + margin / 100)) / 5) * 5;

  const suggestion = $("price-suggestion");
  const explanation = $("price-explanation");
  if (suggestion) suggestion.textContent = money(suggested);
  if (explanation) explanation.textContent = `Costs ${money(cost)} + ${margin}% margin, rounded up to the nearest ₹5.`;
  return suggested;
 }
 const calculateButton = $("price-calculate");
 if (calculateButton) calculateButton.addEventListener("click", calculateCraftPrice);
 ["price-materials", "price-labour", "price-other", "price-margin"].forEach(id => {
  const input = $(id);
  if (input) input.addEventListener("input", calculateCraftPrice);
 });
 const demandSelect = $("demand-level");
 if (demandSelect) demandSelect.addEventListener("change", () => {
  const settings = {
   low: {width:"25%", text:"Low interest selected. Consider small batches and gathering customer feedback."},
   medium: {width:"55%", text:"Moderate interest selected. Treat this as a planning assumption until sales data is available."},
   high: {width:"85%", text:"High interest selected. Check available stock and confirm demand with orders before increasing production."}
  };
  const d = settings[demandSelect.value];
  if (!d) return;
  const meter = $("demand-meter-fill");
  const demandText = $("demand-explanation");
  if (meter) meter.style.width = d.width;
  if (demandText) demandText.textContent = d.text;
 });
 const usePriceButton = $("price-use-product");
 if (usePriceButton) usePriceButton.addEventListener("click", () => {
  const productPrice = $("product-price");
  if (!productPrice) { toast("Product price field was not found."); return; }
  productPrice.value = String(calculateCraftPrice());
  const formTitle = $("product-form-title");
  if (formTitle) formTitle.scrollIntoView({behavior:"smooth", block:"center"});
  productPrice.focus();
  toast("Suggested price copied to the product form. Review it before saving.");
 });
 calculateCraftPrice();

}
