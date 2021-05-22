import { EventEmitter } from 'events'

const eventEmiiter = new EventEmitter()

eventEmiiter.on('testEvent', (obj) => {
  console.log('Acabou de ouvir um evento!')
  console.log(obj)
})

eventEmiiter.on('testEvent', (obj) => {
  getErro('<<400>>')
})

eventEmiiter.emit('testEvent', 'Realização de teste utilizando o eventemitter')

function getErro(err) {
  console.log('Um erro ocorreu.')
  console.log(err)
}
