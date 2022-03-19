<template>
  <div class="box">
    <div class="search-box">
      <form @submit.prevent="search">
        <input type="text" v-model="query" placeholder="Search for recipe" />
        <button>
          <img src="https://img.icons8.com/flat-round/344/arrow.png" alt="" />
        </button>
      </form>
    </div>
  </div>
  <recipe-details :data="recipe" />
</template>

<script>
import RecipeDetails from "../RecipeDetails";
export default {
  components: { RecipeDetails },
  data() {
    return {
      query: "",
      recipe: null,
    };
  },
  methods: {
    search() {
      fetch(`https://recipesapi2.p.rapidapi.com/recipes/${this.query}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "recipesapi2.p.rapidapi.com",
          "x-rapidapi-key":
            "b79122b34fmshdb8d3246fbb5248p15f9ddjsn3eee3e47c518",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          this.recipe = response.data;
          this.query = "";
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  top: 55%;
  min-width: 100%;
  .search-box {
    min-height: 40vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    form {
      display: flex;
      align-items: center;
      align-content: center;
      input {
        border-radius: 20px;
        outline: none;
        border: none;
        padding: 10px 5px;
        border: 3px solid #ddd;
        font-size: 3ch;
        color: #444;
        width: 65vw;
        animation: expand 600ms ease-in-out;
      }
      button {
        border: none;
        background: transparent;
        cursor: pointer;
        transition: opacity 250ms ease-in-out;
        img {
          width: 50px;
          background: transparent;
        }
      }
      button:hover {
        opacity: 0.5;
      }
    }
  }
}

@keyframes expand {
  0% {
    width: 0vw;
    opacity: 0.3;
  }
  100% {
    width: 50vw;
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
  .box {
    .search-box {
      .group {
        input {
          font-size: 2ch;
        }
        button {
          img {
            width: 40px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .box {
    .search-box {
      .group {
        input {
          font-size: 1.5ch;
          padding: 6px 5px;
          width: 60vw;
        }
        button {
          img {
            width: 35px;
          }
        }
      }
    }
  }
}
</style>
