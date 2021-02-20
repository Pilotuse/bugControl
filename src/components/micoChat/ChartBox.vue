<template>
    <div class="chart-box">
        <div class="show-chart"></div>
        <div class="chart-code">
            <textarea></textarea>
            <button>发送</button>
        </div>

    </div>
</template>

<style scoped>
.chart-box {
    float: left;
    padding: 10px;
    width: 40%;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    min-height: 80vh;
    overflow: scroll;
}

.show-chart {
    width: 100%;
    height: 79%;
    background: #f9f9f9;
}

.chart-code {
    position: relative;
    width: 100%;
    height: 22%;
}

textarea {
    padding: 8px;
    padding-top: 30px;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    outline: none;
    border-top: 1px solid #ececec;
    box-sizing: border-box;
}

button {
    padding: 6px 14px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: 1px solid #ececec;
    outline: none;
    font-size: 14px;
    color: #888;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #67c23a;
    color: #fff;
}
</style>