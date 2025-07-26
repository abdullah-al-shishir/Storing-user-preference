function storingUserPref(){
    const bannerHTML=
        `<header class="header-container">
        <label for="selectFontSize">Select Font Size: </label>
        <select name="selectFontSize" id="selectFontSize">
            <option value="10px">10px</option>
            <option value="20px">20px</option>
            <option value="30px">30px</option>
            <option value="40px">40px</option>
        </select>

        <label for="selectBgColor">Select Background-Color</label>
        <select name="selectBgColor" id="selectBgColor">
            <option value="Aqua">Aqua</option>
            <option value="Green">Green</option>
            <option value="Tomato">Tomato</option>
            <option value="Purple">Purple</option>
        </select>
        <button type="reset" id="resetButton">Reset</button>
    </header>


    <main>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iure rerum quaerat soluta quod enim ipsum ullam, cupiditate repellendus vero libero mollitia atque quia quam in quos. Amet deleniti eveniet repellendus natus quisquam qui doloremque molestiae id maiores. Quas enim doloremque tenetur corporis, velit unde, earum quibusdam, molestiae necessitatibus minus voluptates rerum natus asperiores commodi nesciunt impedit! Sapiente enim ratione accusantium doloremque reprehenderit, deleniti ipsa sed necessitatibus illo reiciendis ea veniam non repudiandae corrupti nemo nisi? Fugit reprehenderit ex impedit voluptates nemo ea commodi unde reiciendis? Amet eligendi dolor quibusdam minima voluptates necessitatibus consequatur autem totam vero sapiente iste, harum aperiam porro iure sit minus quia soluta animi maxime quod. Id modi dignissimos quo! Sit eum nemo ratione consequatur asperiores.</p>
    </main>`
    ;
    document.body.insertAdjacentHTML('beforeend',bannerHTML);
}
storingUserPref();

const selectFontSize=document.getElementById('selectFontSize');
const selectBgColor=document.getElementById('selectBgColor');
const resetButton=document.getElementById('resetButton');
const mainElement=document.querySelector('main');



// FontSize event listener:
selectFontSize.addEventListener('change',(event)=>{
    const selectedSize=event.target.value;
    mainElement.style.fontSize=selectedSize;
    localStorage.setItem('font',selectedSize);
});
// BG-Color event listener:
selectBgColor.addEventListener('change',(event)=>{
    const BgColor=event.target.value;
    mainElement.style.backgroundColor=BgColor;
    localStorage.setItem('color',BgColor);
});
// Reset button:
resetButton.addEventListener('click',()=>{
    localStorage.removeItem('font');
    localStorage.removeItem('color');
    setValues('10px','Aqua');
})

// sey value:
const setValues=(FontSize,BGColor)=>{
    selectFontSize.value=FontSize;
        selectBgColor.value=BGColor;
        mainElement.style.fontSize=FontSize;
        mainElement.style.backgroundColor=BGColor;

}
// initial setup
const initialSetUP=()=>{
    const FontSize=localStorage.getItem('font');
    const BGColor= localStorage.getItem('color');

    if(FontSize && BGColor){
        setValues(FontSize,BGColor);
    }
    if(!FontSize && !BGColor){
        setValues('10px','Aqua');
    }
    if(!FontSize && BGColor){
        setValues('10px',BGColor);
    }
    if(FontSize && !BGColor){
        setValues(FontSize,'Aqua');
    }
    
}
initialSetUP();

