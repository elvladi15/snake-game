package main

import (
	"encoding/json"
	"fmt"
	"github.com/go-chi/chi"
	"net/http"
)

type User struct {
	ID    int
	Name  string
	Score int
}

var users []User = []User{
	User{
		ID:    1,
		Name:  "Jose",
		Score: 100,
	},
	User{
		ID:    2,
		Name:  "Maria",
		Score: 200,
	},
}

func getScores(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(users)
}
func main() {
	r := chi.NewRouter()
	r.Get("/", getScores)

	fmt.Println("Server running on port 3000")
	http.ListenAndServe(":3000", r)
}
