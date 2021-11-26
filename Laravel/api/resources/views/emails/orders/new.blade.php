<html>
<body>
<h2>
    Hola! se ha realizado una nueva solicitud de pedido, con fecha:
</h2>
<p>{{$order->created_at}}</p>
<h2>Cliente:</h2>
<p>{{$order->user->name}}</p>
</body>
</html>
