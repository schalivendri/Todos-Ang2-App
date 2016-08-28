export class Init{
    load(){
        if(localStorage.getItem('todos') == null ||
            localStorage.getItem('todos') == undefined) {
            var todos = [
                {id:'id1', text: 'Pickup kids'},
                {id:'id2', text: 'Meeting with manager'},
                {id:'id3', text: 'Dinner with wife'}
            ];
            localStorage.setItem('todos',JSON.stringify(todos));
        }
        else {
            console.log('Found Todos...');
        }
    }
}