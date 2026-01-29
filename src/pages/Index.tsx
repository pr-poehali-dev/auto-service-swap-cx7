import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const services = [
  { id: 1, name: 'Замена масла', price: 'от 2 500 ₽', icon: 'Droplets', duration: '30 мин', description: 'Замена моторного масла и масляного фильтра' },
  { id: 2, name: 'Диагностика', price: 'от 1 500 ₽', icon: 'Activity', duration: '45 мин', description: 'Компьютерная диагностика всех систем автомобиля' },
  { id: 3, name: 'Ремонт двигателя', price: 'от 15 000 ₽', icon: 'Settings', duration: '2-5 дней', description: 'Капитальный ремонт и настройка двигателя' },
  { id: 4, name: 'Развал-схождение', price: 'от 3 000 ₽', icon: 'Gauge', duration: '1 час', description: '3D стенд для точной регулировки углов колес' },
  { id: 5, name: 'Замена тормозов', price: 'от 4 500 ₽', icon: 'Disc', duration: '1.5 часа', description: 'Замена колодок, дисков, суппортов' },
  { id: 6, name: 'Кузовной ремонт', price: 'от 8 000 ₽', icon: 'Paintbrush', duration: '2-7 дней', description: 'Рихтовка, покраска, полировка кузова' },
];

const portfolio = [
  { id: 1, title: 'Mazda CX-7 2010', work: 'Капитальный ремонт двигателя', image: 'https://cdn.poehali.dev/projects/6bd2abbf-abb4-48e4-ab83-3e8bbb57e1f8/files/9dad9d4d-82b4-4a31-a217-812713335cf4.jpg' },
  { id: 2, title: 'Mazda CX-7 2012', work: 'Восстановление после ДТП', image: 'https://cdn.poehali.dev/projects/6bd2abbf-abb4-48e4-ab83-3e8bbb57e1f8/files/899f5aba-1911-4188-ad04-1e7390824ed9.jpg' },
  { id: 3, title: 'Mazda CX-7 2008', work: 'Полная диагностика и ТО', image: 'https://cdn.poehali.dev/projects/6bd2abbf-abb4-48e4-ab83-3e8bbb57e1f8/files/faceb52f-5b52-4c52-b52c-2ee0c0df18b3.jpg' },
];

const reviews = [
  { id: 1, name: 'Александр М.', rating: 5, text: 'Отличный сервис! Починили мою CX-7 после серьезной поломки двигателя. Работают быстро и качественно.', date: '15 января 2026' },
  { id: 2, name: 'Елена К.', rating: 5, text: 'Обращаюсь только в Swap CX-7. Профессионалы своего дела, адекватные цены, всегда на связи.', date: '8 января 2026' },
  { id: 3, name: 'Дмитрий П.', rating: 5, text: 'Сделали диагностику и ТО. Все объяснили, показали, что меняли. Очень доволен!', date: '22 декабря 2025' },
];

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [comment, setComment] = useState('');

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime || !name || !phone) {
      toast.error('Заполните все обязательные поля');
      return;
    }
    
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setIsBookingOpen(false);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setName('');
    setPhone('');
    setCarModel('');
    setComment('');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Wrench" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold">Swap CX-7</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="lg" className="hover-scale">
            <Icon name="Phone" className="mr-2" size={18} />
            +7 (900) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://cdn.poehali.dev/projects/6bd2abbf-abb4-48e4-ab83-3e8bbb57e1f8/files/faceb52f-5b52-4c52-b52c-2ee0c0df18b3.jpg')` 
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary hover:bg-primary/90">
            Профессиональный сервис Mazda CX-7
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            SWAP CX-7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Специализированный автосервис по ремонту и обслуживанию Mazda CX-7. 
            Опыт работы более 10 лет. Гарантия качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsBookingOpen(true)}
              className="text-lg px-8 py-6 hover-scale bg-primary hover:bg-primary/90"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale bg-white text-foreground hover:bg-gray-100">
              <Icon name="Info" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {isBookingOpen && (
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">Онлайн запись на обслуживание</DialogTitle>
              <DialogDescription>
                Выберите услугу, дату и время. Мы свяжемся с вами для подтверждения.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="service">Услуга *</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.name}>
                        {service.name} - {service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Дата *</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Время *</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input 
                  id="name" 
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="+7 (900) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="car">Модель автомобиля</Label>
                <Input 
                  id="car" 
                  placeholder="Mazda CX-7 2010"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea 
                  id="comment" 
                  placeholder="Опишите проблему или пожелания"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
            <Button onClick={handleBooking} size="lg" className="w-full">
              Отправить заявку
            </Button>
          </DialogContent>
        </Dialog>
      )}

      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-5xl font-bold mb-4">Полный спектр услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный ремонт и обслуживание Mazda CX-7 любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover-scale cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon as any} className="text-primary group-hover:text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Badge variant="outline">
                      <Icon name="Clock" className="mr-1" size={14} />
                      {service.duration}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-5xl font-bold mb-6">Специализация на Mazda CX-7</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Автосервис Swap CX-7 — это команда профессионалов, специализирующихся исключительно на ремонте и обслуживании Mazda CX-7. 
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-primary/10 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-xl">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Успешных ремонтов</div>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-xl">
                  <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-muted-foreground">Поддержка</div>
                </div>
              </div>
              <ul className="space-y-3">
                {['Оригинальные запчасти', 'Гарантия на все работы', 'Современное оборудование', 'Квалифицированные мастера'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <Icon name="CheckCircle2" className="text-primary" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/6bd2abbf-abb4-48e4-ab83-3e8bbb57e1f8/files/9dad9d4d-82b4-4a31-a217-812713335cf4.jpg"
                alt="Автосервис"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных ремонтов и обслуживания автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover-scale cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary">Выполнено</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.work}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Честные отзывы от реальных владельцев Mazda CX-7
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={review.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="fill-primary text-primary" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы всегда на связи и готовы помочь с вашим автомобилем
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (900) 123-45-67</p>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="MapPin" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 15</p>
                    <p className="text-muted-foreground">Рядом с метро Автозаводская</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground">info@swapcx7.ru</p>
                    <p className="text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                toast.success('Сообщение отправлено!');
              }}>
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input id="contact-phone" type="tel" placeholder="+7 (900) 123-45-67" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Опишите вашу проблему" rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Wrench" className="text-primary-foreground" size={24} />
                </div>
                <span className="text-2xl font-bold">Swap CX-7</span>
              </div>
              <p className="text-background/80">
                Специализированный автосервис по ремонту Mazda CX-7
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li>Диагностика</li>
                <li>Ремонт двигателя</li>
                <li>Кузовной ремонт</li>
                <li>ТО и обслуживание</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-background/80">
                <li>О нас</li>
                <li>Наши работы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>+7 (900) 123-45-67</li>
                <li>info@swapcx7.ru</li>
                <li>г. Москва, ул. Автомобильная, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2026 Swap CX-7. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}