// Changing content in the Section  5 second container
function change_sec_5_content() {
    let span_1 = document.querySelector("#sec-5-span-btn-1");
    let span_2 = document.querySelector("#sec-5-span-btn-2");
    let img = document.querySelector("#sec-5-img-2")
    let sec_5_second_container = document.querySelector(".sec-5-second-container")
    let sec_5_para = document.querySelector("#sec-5-p")
    let sec_5_a = document.querySelector("#sec-5-a")
    span_2.style.background = "black"
    span_2.style.color = "white"
    span_1.style.background = "white"
    span_1.style.color = "black"
    img.src = "Img-folder/86e9c6a8-3732-41a8-82e3-c63d3f97b45f_artist_mason.avif"
    sec_5_second_container.style.backgroundColor = "#FF6711"
    sec_5_para.textContent = "“We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.”"
    sec_5_a.textContent = "—Mason Lieberman (The Real Folk Blues, 2020)"
}
// reset content in the Section 5 second container
function reset_sec_5_content() {
    let span_2 = document.querySelector("#sec-5-span-btn-2");
    let span_1 = document.querySelector("#sec-5-span-btn-1");
    let img = document.querySelector("#sec-5-img-2")
    let sec_5_second_container = document.querySelector(".sec-5-second-container")
    let sec_5_para = document.querySelector("#sec-5-p")
    let sec_5_a = document.querySelector("#sec-5-a")
    span_2.style.background = "white"
    span_2.style.color = "black"
    span_1.style.background = "black"
    span_1.style.color = "white"
    img.src = "Img-folder/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.avif"
    sec_5_second_container.style.backgroundColor = "#FFF804"
    sec_5_para.textContent = ' "The response was overwhelming. It made me wonder why I hadnt pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time." '
    sec_5_a.textContent = "—SOL"
}