package main

import (
	"log"
	"net/http"
	"os"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api"
)

const (
	webhook = ""
)

func main() {
	port := os.Getenv("PORT")
	go func() {
		log.Fatal(http.ListenAndServe(":"+port, nil))
	}()

	bot, err := tgbotapi.NewBotAPI("1114854329:AAGIXlmgZzvmdz16Av-w-wcd2-EVOjZnMSU")
	if err != nil {
		log.Fatal("cr bot: ", err)
	}
	log.Println("bot cr")

	if _, err := bot.SetWebhook(tgbotapi.NewWebhook(webhook)); err != nil {
		log.Fatalf("setting webhook %v; error: %v", webhook, err)
	}
	log.Println("webhook set")

	updates := bot.ListenForWebhook("/")
	for updates := range updates {
		if _, err := bot.Send(tgbotapi.NewMessage(updates.Message.Chat.ID, "эй")); err != nil {
			log.Print(err)
		}
	}
}
