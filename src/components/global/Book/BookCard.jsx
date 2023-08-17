import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack } from "@mui/material";
import { toast } from "react-toastify";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import shared from "../../../utils/shared";
import { useAuthContext } from "../../../context/auth";
import { useCartContext } from "../../../context/cart";

const BookCard = ({ book }) => {
  const authContext = useAuthContext();
  const cartContext = useCartContext();

  const addToCart = (book) => {
    shared.addToCart(book, authContext.user.id).then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        cartContext.updateCart();
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "1rem",
        border: "1px solid #d4d4d4",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          height: "100%",
          backgroundColor: "#eeee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={book.base64image}
          alt="book image"
          style={{ height: "12rem", objectFit: "cover" }}
        />
      </div>
      <Stack
        alignItems="flex-start"
        useFlexGap
        spacing={1}
        sx={{
          height: "100%",
          padding: "0.5rem 1.5rem 1rem 1.5rem",
          width: "100%",
        }}
      >
        <Typography variant="h5">{book.name}</Typography>
        <Chip label={book.category} sx={{ backgroundColor: "#e0e8eb" }} />

        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
        <Typography variant="h6">&#8377; {book.price}</Typography>
        <Button
          variant="contained"
          onClick={() => addToCart(book)}
          startIcon={<ShoppingCartIcon />}
          sx={{
            marginTop: "auto",
            backgroundColor: "#ea3c53",
            "&:hover": {
              backgroundColor: "#e60026",
            },
          }}
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
};

export default BookCard;
