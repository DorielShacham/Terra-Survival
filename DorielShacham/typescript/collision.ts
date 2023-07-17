//collision from all sides
function collision(first, second) {
  try {
    if (
      first.x < second.x + second.width &&
      first.x + first.width > second.x &&
      first.y < second.y + second.height &&
      first.y + first.height > second.y
    ) {
      return true;
    }
  } catch (error) {
    if(!collision)throw new Error("impact error");
    console.error(error);
  }
};
