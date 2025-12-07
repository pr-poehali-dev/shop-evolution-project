import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    { id: "all", name: "Все товары", icon: "ShoppingBag" },
    { id: "fitness", name: "Фитнес", icon: "Dumbbell" },
    { id: "running", name: "Бег", icon: "Footprints" },
    { id: "yoga", name: "Йога", icon: "Heart" },
    { id: "nutrition", name: "Питание", icon: "Apple" },
  ];

  const products = [
    { id: 1, name: "Гантели 5кг", price: "2 990 ₽", category: "fitness", rating: 5, image: "🏋️" },
    { id: 2, name: "Коврик для йоги", price: "1 490 ₽", category: "yoga", rating: 5, image: "🧘" },
    { id: 3, name: "Беговые кроссовки", price: "8 990 ₽", category: "running", rating: 5, image: "👟" },
    { id: 4, name: "Протеиновый коктейль", price: "3 490 ₽", category: "nutrition", rating: 4, image: "🥤" },
    { id: 5, name: "Фитнес-браслет", price: "4 990 ₽", category: "fitness", rating: 5, image: "⌚" },
    { id: 6, name: "Скакалка", price: "890 ₽", category: "fitness", rating: 4, image: "🪢" },
    { id: 7, name: "Витамины", price: "1 990 ₽", category: "nutrition", rating: 5, image: "💊" },
    { id: 8, name: "Массажный ролик", price: "2 490 ₽", category: "yoga", rating: 4, image: "🎯" },
  ];

  const reviews = [
    { id: 1, name: "Анна М.", rating: 5, text: "Отличный магазин! Купила коврик для йоги и гантели. Качество превосходное, а консультация тренера помогла подобрать нужный вес.", avatar: "👩" },
    { id: 2, name: "Дмитрий К.", rating: 5, text: "Профессиональный подход! Получил консультацию по питанию и тренировкам. Результаты через месяц просто wow!", avatar: "👨" },
    { id: 3, name: "Елена С.", rating: 5, text: "Лучшие беговые кроссовки, которые я покупала! Удобные, легкие, и цена отличная. Спасибо за рекомендацию!", avatar: "👩‍🦰" },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <Icon name="Dumbbell" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SportLife
                </h1>
                <p className="text-xs text-muted-foreground">Спорт и здоровье</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О магазине</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
              <Button 
                variant="outline" 
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open('https://www.donationalerts.com/r/poehalidev', '_blank')}
              >
                <Icon name="Gift" size={18} />
                Мои бонусы
              </Button>
            </nav>
            <Button size="lg" className="hidden md:flex gap-2">
              <Icon name="Phone" size={18} />
              Консультация
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 relative overflow-hidden min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/ссср.jpg)',
            filter: 'brightness(0.4)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white">
              🔥 Новинка: Персональные тренировки
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-2xl">
              Твой путь к здоровью начинается здесь
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Профессиональные товары для спорта и индивидуальные консультации от экспертов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                onClick={() => {
                  setShowCategories(true);
                  setTimeout(() => {
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:text-white">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div className="animate-scale-in bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/80">Товаров</div>
              </div>
              <div className="animate-scale-in bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Довольных клиентов</div>
              </div>
              <div className="animate-scale-in bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-white/80">Консультаций в неделю</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог товаров</h2>
            <p className="text-lg text-muted-foreground">Все для твоих спортивных достижений</p>
          </div>

          {showCategories && (
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id)}
                  className="gap-2 transition-all hover:scale-105"
                >
                  <Icon name={cat.icon as any} size={18} />
                  {cat.name}
                </Button>
              ))}
            </div>
          )}

          {!showCategories && (
            <div className="text-center mb-12">
              <Button 
                size="lg" 
                onClick={() => {
                  setShowCategories(true);
                  setTimeout(() => {
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
              >
                <Icon name="Filter" size={20} className="mr-2" />
                Показать категории
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <Card 
                key={product.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 hover:border-primary"
                style={{animationDelay: `${idx * 0.05}s`}}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{product.image}</div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="fill-primary text-primary" />
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="gap-1">
                      <Icon name="ShoppingCart" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary">О магазине</Badge>
              <h2 className="text-4xl font-bold mb-6">Мы помогаем достигать целей</h2>
              <p className="text-lg text-muted-foreground mb-6">
                SportLife — это не просто магазин спортивных товаров. Мы предлагаем комплексный подход к здоровью и фитнесу.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Профессиональные консультации</h3>
                    <p className="text-muted-foreground">Наши эксперты помогут составить индивидуальную программу тренировок</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="Package" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Качественные товары</h3>
                    <p className="text-muted-foreground">Работаем только с проверенными брендами и производителями</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Поддержка 24/7</h3>
                    <p className="text-muted-foreground">Всегда на связи, чтобы помочь с выбором и ответить на вопросы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary p-12 rounded-3xl text-white text-center animate-scale-in">
                <Icon name="TrendingUp" size={80} className="mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Начни меняться сегодня!</h3>
                <p className="text-lg mb-6">Первая консультация бесплатно</p>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Записаться сейчас
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Нам доверяют тысячи спортсменов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card 
                key={review.id} 
                className="hover:shadow-xl transition-all animate-fade-in border-2"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-4xl">{review.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Запишитесь на бесплатную консультацию</p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших целях и задачах..." 
                    className="min-h-32"
                  />
                </div>
                <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <Icon name="MapPin" size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Москва, ул. Спортивная, 10</p>
                </div>
                <div>
                  <Icon name="Phone" size={24} className="mx-auto mb-2 text-secondary" />
                  <p className="text-sm font-medium">+7 (495) 123-45-67</p>
                </div>
                <div>
                  <Icon name="Mail" size={24} className="mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">info@sportlife.ru</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Dumbbell" size={24} />
            <span className="text-xl font-bold">SportLife</span>
          </div>
          <p className="text-sm opacity-80">© 2024 SportLife. Все права защищены.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="ghost" size="sm" className="text-background hover:text-background/80">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-background/80">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-background/80">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;