<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://placehold.co/600x400" class="img-fluid rounded-start" alt="Product Image">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Item Name<!-- {{ item.name }} --></h5>
                    <p class="card-text">Lorem ipsum ipsum ipsum<!-- {{ item.description }} --></p>
                    <p class="card-text"><small class="text-muted">Price: 500 <!-- ${{ item.price }} --></small></p>
                    <p class="card-text"><small class="text-muted">Quantity: 8 <!-- {{ item.quantity }} --></small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    /* props: {
        item: {
            type: Object,
            required: true
        }
    } */
};
</script>