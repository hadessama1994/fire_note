import Api from './api'

const NotesService = {
    index: () => Api.get('/notes',
     {
        headers: {'access-token': localStorage.getItem('token')}
    }),

    create: () => Api.post('/notes',  {'title': 'Nova Nota', 'body': 'Nova nota...'}, 
    {
        headers: {'access-token': localStorage.getItem('token')}
    }),


    delete: (id) => Api.delete(`/notes/${id}`, 
    {
        headers: {'access-token': localStorage.getItem('token')}
    }),

    update: (id, params) => Api.put(`/notes/${id}`, params, {
        headers: {'access-token': localStorage.getItem('token')}
      }),

    search: (query) => Api.get(`/notes/search/?query=${query}`, {
        headers: {'access-token': localStorage.getItem('token')}
      }),
    
}

//console.log(NotesService.index + 'oi')

export default NotesService