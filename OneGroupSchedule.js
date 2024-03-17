//убрать иконки "пары одновременно"
//> не с первого раза убираются 
var list = document.getElementsByClassName("event-block active archive events-group");
for (const a of list) {
 	//a.hidden = true;
	a.remove();
}

// убрать пары др групп
//> остаются пустышки от одиноких пар
const GROUP_NUMBER = "1";
const GROUP_NAME = "Б9121-09.03.03пикд";
const b_MILLITARY = false;

var list = document.getElementsByClassName("fc-event fc-event-start fc-event-end fc-event-past fc-timegrid-event fc-v-event event-block");// expanded");
for (const fc of list) 
for (const fcMain of fc.children) 
for (const lesson of fcMain.children) 
{
    
var kill = false;
for (const eve of lesson.children)
if(eve.className == "event-block__body") 
for (const c of eve.children)
{
	if (c.className = "f-XS mb-1")
        {
			if(!b_MILLITARY && c.innerText == "Военная подготовка") { kill = true; break; }
			if (c.innerText.search(GROUP_NAME) == -1 || c.innerText.search(`подгруппа`) == -1)
				continue;
			if(c.innerText.search(`подгруппа: ${GROUP_NUMBER}`) == -1) { kill = true; break; }
		};
}
if(kill) 
{
    if (fc.className.search("expanded") == -1) fc.className = `${fc.className} expanded`;
    //console.log(lesson);		
    lesson.remove();
}
}

