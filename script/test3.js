let list = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
let ulist = document.querySelector('ul');
for (i = 0; i < list.length; i++) {
    let input = list[i];
    let real = input.slice(0, 3);
    let idx = input.indexOf(";");
    let name = input.slice(idx + 1);
    let result = real + " : " + name;
    let lis = document.createElement('li');
    lis.appendChild(document.createTextNode(result));
    ulist.appendChild(lis);
}