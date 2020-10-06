import ev from './events.js';

ev.on('testEvent', () => {
    console.log('Estou te ouvindo também.');
})

ev.emit('testEvent', 'You are listen me.');