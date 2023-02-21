// schedule é um agendador de tarefas
const schedule = require('node-schedule')

// 'segundo minuto hora diaDoMês mês diaDaSemana'
// no exemplo abaixo de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
}) 

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// Outras funções que são comuns como o setTimeout
// setImmediate
// setInterval

// criando regras para recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)] //de segunda a sabado
regra.hour = 11 //hora 11
regra.second = 30 //segundo 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})