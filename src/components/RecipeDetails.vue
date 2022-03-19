<template>
  <div>
    <div class="recipe-box" v-for="(item, index) in data" :key="index">
      <div class="flip-card">
        <div class="flipcard-inner">
          <div class="flipcard-front">
            <img :src="item.image" alt="" />
          </div>
          <div class="flipcard-back">
            <ul>
              <li v-for="(prop, val, index) in item.nutrients" :key="index">
                {{ val }}: {{ prop }}
              </li>
            </ul>
            <h3 v-if="Object.keys(item.nutrients).length === 0">
              No Info was found
            </h3>
          </div>
        </div>
      </div>
      <div class="text-desc">
        <h2>{{ item.name }}</h2>
        <ul>
          <u><h3>Ingredients:</h3></u>
          <li v-for="(ingredient, index) in item.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
        <span v-if="item.servings"
          >Number of Servings: {{ item.servings }}
        </span>
      </div>
    </div>
    <h3 class="error" v-if="data && data.length === 0">
      No Recipes were found :(
    </h3>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
        loading:null,
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .error {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 5ch;
    color: #fff;
    padding: 15px 10px;
    animation: appear 0.5s ease-in-out;
  }
  .recipe-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #333e52;
    padding: 5%;
    color: #fff;
    perspective: 800px;
    .flip-card {
      background-color: transparent;
      width: 80%;
      height: 400px;
      perspective: 1000px; /* Remove this if you don't want the 3D effect */
      animation: zoomin 2s ease-in-out;
      .flipcard-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        .flipcard-front,
        .flipcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
          ul {
            margin: 0;
            padding: 0;
          }
        }
        .flipcard-front {
          background-color: #bbb;
          color: black;
          img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
          }
        }

        .flipcard-back {
          background-color: #778294;
          color: white;
          transform: rotateY(180deg);
          ul {
            li {
              list-style: none;
            }
          }
        }
      }
    }
    .flip-card:hover .flipcard-inner {
      transform: rotateY(180deg);
    }
    .text-desc {
      display: flex;
      flex-direction: column;
      margin: 0 50px;
      width: 100%;
      position: relative;
      animation: comein 2s ease-in-out;
      h2 {
        margin: 0;
        text-align: center;
        font-size: 5ch;
      }
      h3 {
        font-size: 4ch;
        margin: 0;
      }
      ul {
        padding: 0;
        li {
          list-style: none;
          font-size: 2.5ch;
        }
      }
      span {
        position: relative;
        bottom: -10%;
        padding: 10px;
        background: #daa21c;
        border-radius: 20px;
        font-weight: 600;
        width: max-content;
      }
    }
  }

@keyframes zoomin {
  0% {
    transform: scale(0.1);
    opacity: 0.2;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes comein {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes appear {
  0% {
    transform: scale(0.2);
    opacity: 0.2;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 950px) {
  .recipe-box {
    flex-direction: column;
    .flip-card {
      height: 250px;
      width: 70%;
      .flipcard-inner {
        .flipcard-back {
          ul {
            li {
              font-size: 1.1ch;
            }
          }
        }
      }
    }
    .text-desc {
      h2 {
        font-size: 3.5ch;
      }
      align-items: center;
      ul {
        text-align: center;
        h3 {
          font-size: 2.5ch;
        }
        li {
          font-size: 1.8ch;
        }
      }
    }
  }
  .error {
    left: 0;
    right: 0;
    bottom: 8%;
    margin: 0;
    font-size: 4.3ch;
    color: #fff;
  }
}
@media screen and (max-width: 690px) {
  .recipe-box {
    flex-direction: column;
    .flip-card {
      height: 200px;
      width: 70%;
      .flipcard-inner {
        .flipcard-back {
          ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 7px;
            li {
              font-size: 1ch;
            }
          }
        }
      }
    }
    .text-desc {
      h2 {
        font-size: 3.5ch;
      }
      align-items: center;
      ul {
        text-align: center;
        h3 {
          font-size: 2.5ch;
        }
        li {
          font-size: 1.8ch;
        }
      }
    }
  }
  .error {
    font-size: 3.4ch;
    bottom: 8%;
  }
}
@media screen and (max-width: 450px) {
  .error {
    font-size: 2.1ch;
  }
  .recipe-box {
    .flip-card {
      width: 100%;
    }
    .text-desc {
      h2 {
        font-size: 2.5ch;
        padding-top: 20px;
      }
      align-items: center;
      ul {
        text-align: center;
        h3 {
          font-size: 2ch;
        }
        li {
          font-size: 1.2ch;
        }
      }
    }
  }
}
</style>
