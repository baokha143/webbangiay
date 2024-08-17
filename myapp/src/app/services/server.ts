import express from 'express';
import PayOs from '@payos/node';

const payos = new PayOs(
    'your-client-id',
    'your-client-secret',
    'your-merchant-id'
);

const app = express();
app.use(express.static('public'));
app.use(express.json());

const Domain = 'http://localhost:4200';

app.post('/create-payment-link', async (req, res) => {
    const order = {
        amount: 10000,
        description: 'Thanh toan giay',
        orderCode: 10,
        returnUrl: `${Domain}/success.html`,
        cancelUrl: `${Domain}/cancel.html`
    };
    try {
        const paymentLink = await payos.createPaymentLink(order);
        res.json({ checkoutUrl: paymentLink.checkoutUrl });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create payment link' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
