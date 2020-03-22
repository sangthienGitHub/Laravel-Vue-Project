
<template>
  <div>
    <bookable-list-item item-title="Cheap Villa" item-content="A beautiful Villa 1" :price="1000"></bookable-list-item>
    <bookable-list-item item-title="Cheap Villa 2" item-content="A beautiful Villa 2" :price="500"></bookable-list-item>
  </div>
</template>
<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem: BookableListItem
  },
  data() {
    return {
      bookable1: {
        title: "Cheap Villa",
        content: "A very cheap Villa"
      },
      bookable2: {
        title: "Cheap Villa 2",
        content: "A very cheap villa 2"
      }
    };
  },
  // beforeCreate() {
  //   console.log("before create");
  // },
  created() {
    console.log("created");
    console.log(this.bookable1);
    console.log(this.bookable2);
  },
  // beforeMount() {
  //   console.log("before mount");
  // },
  mounted() {
    console.log("mounted");
  }
  // beforeDestroy() {
  //   console.log("before destroyed");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // }
};
</script>