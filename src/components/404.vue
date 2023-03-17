<template>
    <div>
        <h1 class="not"> Not FOUND </h1>
    </div>
</template>

<style>
.not {
  margin-top: 0;
  font-size: 32px;
  font-weight: bold;
  color: #007bff;
}

@media screen and (max-width: 767px) {
  .not {
    font-size: 24px;
    margin-top: 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .not {
    font-size: 28px;
    margin-top: 30px;
  }
}

@media screen and (min-width: 1024px) {
  .not {
    font-size: 32px;
    margin-top: 50px;
  }
}

</style>