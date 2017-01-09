<template>
    <div>
        <input type="button" @click="takephoto()" value="Take Photo Image Base64" />
        <img :src="src" id="myImage" height="200px" width="200px" />
    </div>
</template>

<script>
    export default {
        methods: {
            takephoto() {
                navigator.camera.getPicture(this.onSuccess, this.onFail, {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL
                });
            },
            onSuccess(imageData) {
                this.src = "data:image/jpeg;base64," + imageData;
            },
            onFail(message) {
                alert('Failed because: ' + message);
            }
        },
        data() {
            return {
                src: ''
            }
        }
    }
</script>