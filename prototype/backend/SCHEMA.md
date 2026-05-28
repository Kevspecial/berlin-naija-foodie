# Strapi Content Types Schema

## Collection: Category
- Name (Text, Required)
- Slug (UID, Required)

## Collection: Dish
- Name (Text, Required)
- Description (Rich Text)
- Price (Decimal, Required)
- Image (Media, Single)
- Category (Relation, Many-to-One with Category)
- IsAvailable (Boolean, Default: true)

## Collection: Order
- OrderNumber (UID)
- CustomerName (Text)
- CustomerEmail (Email)
- TotalAmount (Decimal)
- Status (Enumeration: Pending, Preparing, OutForDelivery, Delivered)
- Items (JSON/Relation to Dish)
