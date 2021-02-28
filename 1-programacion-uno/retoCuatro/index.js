<body>
    <ul id="participantes">
        <li class="participante" id="studentOne" data-number=0>Ivan</li>
        <li class="participante" id="studentTwo" data-number=1>Andres</li>
        <li class="participante" id="studentThree" data-number=2>Mateo</li>
    </ul>
    <form action="">
        <input id="newMember" type="text" placeholder="Inscribe a otro participante">
        <button type="button" id="addMemberButton">Agregar nuevo participante</button>
    </form>
    
    <script>
        var numeroParticipantesTotales=document.querySelectorAll('.participante');
        var participantesEnArray=[...numeroParticipantesTotales]
        const participantes=document.getElementById('participantes')
        const newMember = document.getElementById('newMember');
        const studentWinner =document.querySelector('#studentWinner')
        const studentOne = document.querySelector('#studentOne');
        const studentTwo = document.querySelector('#studentTwo');
        const studentThree = document.querySelector('#studentThree');
        const addMemberButton =document.querySelector('#addMemberButton');
        addMemberButton.addEventListener('click',(event)=>{
            const text=document.createTextNode(newMember.value);
            const nuevoMiembro=document.createElement('li');
            nuevoMiembro.classList.add('participante')
            participantes.appendChild(nuevoMiembro);
            nuevoMiembro.appendChild(text);
            numeroParticipantesTotales=document.querySelectorAll('.participante');
        })
        function lotteryWinner(){
            const lottery= Math.floor(Math.random()*(participantesEnArray.length));
            for(i=0; i<50;i++){
                if(i===lottery){
                    studentWinner.innerHTML=`${participantesEnArray[i].innerText}`;
                }
            }
        }
    </script>
</body>