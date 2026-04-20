import { assertEquals } from "@std/assert";
import { destinations } from "./destinations.ts";

Deno.test("Dubi folgt auf Isti", () => {
  // Arrange
  const start = destinations.indexOf("Isti");

  // Act
  const nextDestination = destinations[start + 1];

  // Assert
  assertEquals(nextDestination, "Dubi");
});

Deno.test("Zypi folgt auf Dubi", () => {
  // Given
  const start = destinations.indexOf("Dubi");

  // When
  const nextDestination = destinations[start + 1];

  // Then
  assertEquals(nextDestination, "Zypi");
});
