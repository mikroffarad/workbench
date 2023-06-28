let headerTopLang = document.querySelector(".header-top-lang")
let langs = headerTopLang.children;

headerTopLang.onclick = function (event) {
	let target = event.target; // где был клик?

	if (!target.className.includes("active")) {
		switching()	
		target.classList.add("active")
	} else {
		
	}
};

function switching() {
	for (let i = 0; i < langs.length; i++) {
		let lang = langs[i].className
		if (lang.includes("active")) {
			langs[i].classList.remove("active")
		}
	}
}