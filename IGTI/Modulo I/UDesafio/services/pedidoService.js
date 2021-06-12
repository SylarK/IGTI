import PedidoRepository from '../repo/pedidoRepository.js'

async function getTotalCliente(nomeCliente) {

  const pedidos = await PedidoRepository.getPedidos();

  console.log(await pedidos.filter(p => p.cliente && p.cliente === nomeCliente && p.entregue));

  return null

  //pedidos.filter((p) => p.cliente && (p.cliente === nomeCliente && p.entregue)).map(p => p.valor).reduce((prev, curr) => prev + curr, 0);

  /*número 8*/
  /*
    const pedidos = await PedidoRepository.getPedidos();
    const lista = [];
    pedidos.filter(p => p.entregue).forEach(p => {
      const index = lista.findIndex(it => it.produto === p.produto);
      if(index === -1){
        lista.push({produto: p.produto, quantidade: 1});
      }else{
        lista[index].quantidade++;
      }
    });
    lista.sort((a,b) => b.quantidade - a.quantidade)
    return lista.map(p => `${p.produto} - ${p.quantidade}`);

  */

}

async function getAll() {
  const pedidos = await PedidoRepository.getPedidos();
  return pedidos;
}

export default {
  getTotalCliente,
  getAll
}